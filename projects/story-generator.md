---
title: Story Generator
technologies: Rust, GitHub Pages, Grammar Parse Trees, File Processing
github: https://github.com/nalarkin/story-generator
imageSrc: /rustacean.webp
imageAlt: rust mascot
order: 3
dataTest: story-gen
---

- Developed a binary executable that generates random sentences based off the user defined rules
- Developed grammar rule validation that prevents endless cycles and unreachable grammar rules by using graph theory
- Grammar rules are parsed from a local text file the user specifies
- Grammar rule notation was based of Backus-Naur grammar notation
- Created substantial documentation for the application
- Implemented graceful error handling, including program exit if endless cycle is detected, and a warning message if unreachable grammar rules exist
  Program is written in Rust
