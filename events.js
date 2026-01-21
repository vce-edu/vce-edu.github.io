const SUPABASE_URL = "https://auygeiqcsygchfmitfxv.supabase.co";
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1eWdlaXFjc3lnY2hmbWl0Znh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMDUzOTEsImV4cCI6MjA4MjY4MTM5MX0.WVpNirNUPa3v3VP5vusjAFezPvH1C8ZF16dWRPcKH-4';

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

document.addEventListener('DOMContentLoaded', async () => {
    let supabaseClient;
    try {
        if (window.supabase && window.supabase.createClient) {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        } else {
            console.error("Supabase SDK not found");
            return;
        }
    } catch (err) {
        console.error("Supabase init error:", err);
        return;
    }

    const upcomingGrid = document.getElementById('upcoming-events-grid');
    const previousGrid = document.getElementById('previous-events-grid');

    async function fetchAndRenderEvents() {
        try {
            // Fetch events and buttons in parallel
            const [eventsRes, buttonsRes] = await Promise.all([
                supabaseClient.from('events').select('*').order('event_date', { ascending: true }),
                supabaseClient.from('event_buttons').select('*').order('button_order', { ascending: true })
            ]);

            if (eventsRes.error) throw eventsRes.error;
            if (buttonsRes.error) throw buttonsRes.error;

            const events = eventsRes.data;
            const buttons = buttonsRes.data;

            if (!events || events.length === 0) {
                const emptyMsg = '<p class="loading-msg">No events found at the moment.</p>';
                upcomingGrid.innerHTML = emptyMsg;
                previousGrid.innerHTML = emptyMsg;
                return;
            }

            // Map buttons to their respective events
            const buttonsMap = {};
            buttons.forEach(btn => {
                if (!buttonsMap[btn.event_id]) {
                    buttonsMap[btn.event_id] = [];
                }
                buttonsMap[btn.event_id].push(btn);
            });

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            let upcomingHTML = '';
            let previousHTMLArr = [];

            events.forEach(event => {
                // Parse the YYYY-MM-DD date string manually to avoid timezone shifts
                const [year, month, day] = event.event_date.split('-').map(Number);
                const eventDate = new Date(year, month - 1, day);

                const isUpcoming = eventDate >= today;
                const displayDay = day;
                const displayMonth = months[month - 1];

                // Render buttons for this event
                const eventButtons = buttonsMap[event.event_id] || [];
                let buttonsHTML = '';

                if (eventButtons.length > 0) {
                    buttonsHTML = eventButtons.map(btn => `
                        <a href="${btn.button_url}" class="${isUpcoming ? 'btn-primary' : 'btn-secondary'}" ${btn.button_url.startsWith('http') ? 'target="_blank"' : ''}>
                            ${btn.button_text} ${isUpcoming ? '<i class="fas fa-arrow-right"></i>' : ''}
                        </a>
                    `).join('');
                } else {
                    // Fallback for events without buttons in the table
                    buttonsHTML = `<a href="${getEventLink(event.event_name)}" class="${isUpcoming ? 'btn-primary' : 'btn-secondary'}">
                        ${isUpcoming ? 'View Details <i class="fas fa-arrow-right"></i>' : 'View Photos'}
                    </a>`;
                }

                const cardHTML = `
                    <div class="event-card ${isUpcoming ? 'upcoming' : 'past'}">
                        <div class="date-side">
                            <span class="day">${displayDay}</span>
                            <span class="month">${displayMonth}</span>
                        </div>
                        <div class="card-body">
                            <span class="category-tag">${getCategoryTag(event.event_name)}</span>
                            <h3>${event.event_name}</h3>
                            <p>${event.event_description || 'Click below to learn more about this event.'}</p>
                            <div class="event-actions" style="display: flex; gap: 10px; flex-wrap: wrap;">
                                ${buttonsHTML}
                            </div>
                        </div>
                    </div>
                `;

                if (isUpcoming) {
                    upcomingHTML += cardHTML;
                } else {
                    previousHTMLArr.push(cardHTML);
                }
            });

            upcomingGrid.innerHTML = upcomingHTML || '<p class="loading-msg">No upcoming events scheduled.</p>';
            previousGrid.innerHTML = previousHTMLArr.reverse().join('') || '<p class="loading-msg">No previous events found.</p>';

        } catch (err) {
            console.error("Error fetching events:", err);
            const errorMsg = '<p class="loading-msg error">Error loading events. Please try again later.</p>';
            upcomingGrid.innerHTML = errorMsg;
            previousGrid.innerHTML = errorMsg;
        }
    }

    function getCategoryTag(name) {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('scholarship')) return 'Scholarship';
        if (lowerName.includes('test') || lowerName.includes('exam')) return 'Competition';
        if (lowerName.includes('day') || lowerName.includes('celebration')) return 'Celebration';
        if (lowerName.includes('workshop')) return 'Workshop';
        return 'VCE Event';
    }

    function getEventLink(name) {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('scholarship')) return 'scholarship.html';
        if (lowerName.includes('awareness')) return 'certificate.html';
        return '#';
    }

    fetchAndRenderEvents();
});
