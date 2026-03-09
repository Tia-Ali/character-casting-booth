# Character Casting Booth
Character Casting Booth is a playful cloud-based web application that generates original sci-fi characters based on a selected world and mood. The project combines creative storytelling with modern cloud engineering practices, demonstrating how a simple user interface can interact with structured data hosted in the cloud.
The experience is designed to feel like animated casting booth, where users select a setting and mood and instantly meet a brand-new character.

# Project Concept
Storytelling and technology are often treated as separate disciplines, but this project explores how they can work together.

The application generates fictional characters inspired by different sci-fi worlds and narrative moods. Each character includes:
- A name
- A role in their universe
- A defining personality trait
- A short voice line

This creates the feeling of discovering characters from an animated film or science fiction story.
The goal of the project is to demonstrate how creative applications can be powered by simple but scalable cloud infrastructure.

# Features
- Interactive character generation
- Dynamic character data loaded from JSON
- Clean, colourful UI
- Hosted as a static website on AWS S3
- Automated deployment using GitHub Actions
- Structured project architecture for maintainability

# Frontend Stack
- HTML
- CSS
- JavaScript

# Cloud & DevOps
- Amazon S3 (static website hosting)
- GitHub (version control)
- GitHub Actions (CI/CD pipeline)

# Data
- JSON for structured character definitions

# How It Works
- The user selects a world and mood from dropdown menus.
- When the Meet your character button is pressed, JavaScript runs.

# The application fetches character data from:
- data/character.json
- A random character is selected.
- The character profile is displayed in the UI.
- The logic is handled entirely in the browser using JavaScript.

# CI/CD Deployment
This project demonstrates a simple DevOps pipeline.
When changes are pushed to the main branch:
- GitHub Actions triggers a workflow
- The workflow synchronizes the repository files with an Amazon S3 bucket
- The live website updates automatically
- This removes the need for manual uploads and simulates a real-world continuous deployment workflow.

# This project demonstrates the intersection of:
- Creative storytelling
- Frontend development
- Cloud infrastructure
- DevOps automation

It shows how simple technologies can be combined to create an engaging and scalable interactive experience.
