# Vintech Computer Education (VCE) — Website

Official website of **Vintech Computer Education (VCE)**, Bareilly's IT coaching institute, founded in 2001 by Mr. Manish Vishwakarma. The site is a static, multi-page HTML/CSS/JS site hosted with GitHub Pages at the [`vce-edu.github.io`](https://vce-edu.github.io) domain (with a `CNAME` pointing to a custom domain).

## About VCE

Vintech Computer Education has trained over 5,000 students since relocating to Bareilly in 2010, and is recognized as a UP Government Skill Partner in collaboration with UPRTOU (Uttar Pradesh Rajarshi Tandon Open University). VCE operates three branches in and around Bareilly, UP.

## Tech Stack

- **HTML** — page structure and content
- **CSS** (`styles.css`) — styling and layout
- **JavaScript** (`animations.js`, `events.js`, `diploma.js`) — interactivity and page animations
- **GitHub Pages** — static hosting

No build tools or frameworks are required — the site is plain HTML/CSS/JS.

## Site Structure

| File | Purpose |
|---|---|
| `index.html` | Home page |
| `about.html` | About the institute, leadership, and branches |
| `courses.html` | Courses offered |
| `faculty.html` | Faculty/team profiles |
| `events.html` | Institute events |
| `notes.html` | Study notes/resources |
| `assessment.html` | Student assessments |
| `registration.html` | Enrollment/registration form |
| `student-sign.html` | Student sign-in/portal |
| `diploma.html` | Diploma verification/lookup |
| `scholarship.html`, `scholarship-registration.html`, `scholarship-results.html` | Scholarship program pages |
| `admit-card.html` | Admit card download |
| `pay-fees.html` | Fee payment |
| `contact.html` | Contact information |
| `privacypolicy.html`, `t&c.html` | Legal pages |
| `404.html` | Custom 404 error page |
| `assets/` | Images, favicons, and other static assets |
| `sitemap.xml`, `robots.txt` | SEO configuration |

## Running Locally

Since this is a static site, you can preview it locally without any build step:

```bash
git clone https://github.com/vce-edu/vce-edu.github.io.git
cd vce-edu.github.io
```

Then either:

- Open `index.html` directly in your browser, or
- Serve it with a simple local server for accurate relative-path/asset behavior:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deployment

The site is deployed automatically via **GitHub Pages** from the `main` branch. Any changes pushed to `main` are published live.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-change`)
3. Make your changes
4. Commit and push (`git commit -m "Describe your change"`)
5. Open a pull request

## Contact

- **Main Branch:** Opp. Ramayan Vatika, Bareilly, UP 243006 — +91 90684 85233
- **Second Branch:** Green Park, Bareilly, UP — +91 94564 89436
- Telegram: [@vc_edu](https://t.me/vc_edu)
- Instagram: [vintech_computer_education](https://www.instagram.com/vintech_computer_education)
- LinkedIn: [Vintech Computer Education](https://www.linkedin.com/company/vintech-computer-education/)

## License

No license has been specified for this repository. All rights reserved by Vintech Computer Education unless stated otherwise.
