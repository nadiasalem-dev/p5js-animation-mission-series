# p5.js Animation & Object-Oriented Mission Series

This repository documents a structured progression of small interactive programming exercises built using p5.js.

The projects were created as focused practice to strengthen visual programming foundations, animation logic, and interactive behavior before moving into more complex applications.

---

## 🟢 Procedural Phase (Airplane Mode Mini-Missions)

These missions focus on building core programming fundamentals using graphical output and interaction.

Concepts practiced:

- Canvas rendering and coordinate systems
- Motion and directional logic
- Conditional edge detection
- Mouse interaction and event handling
- State-based behavior
- Controlled randomness

Each mission isolates a specific behavior (movement, color change, constraints, etc.) to reinforce understanding of how graphical systems respond to rules and user input.

---

🔵 Object-Oriented Phase (Completed Through Mission 6)

This phase transitions procedural animation into structured object-oriented design using class inheritance and layered responsibilities.

Concepts implemented:

Encapsulation through class-based design

Managing multiple instances using arrays

Direction-aware boundary collision handling

Event-based color changes on collision

State machine (normal → fast → stun → normal)

Separation of base velocity from state-driven speed multiplier

Inheritance using extends and super

Clean separation of:

Physics layer (MovingObject)

Behavior & rendering layer (Ball)

Environment layer (sketch)

The physics system now exists independently of rendering logic, forming a reusable motion engine.

## Purpose

These exercises were intentionally designed as incremental practice to deepen understanding of how interactive graphics behave under structured rules, randomness, and state transitions.

Each mission is small and focused, reinforcing one concept at a time before layering additional complexity.
🟣 Physics Phase (New Mission Numbering)

We restart at Mission 1 for this phase.

🟡 Mission 1 – Object–Object Distance Detection

Detect overlap between objects using center distance formula.
No physics response yet — detection only.

🟠 Mission 2 – Visual Collision Feedback

Trigger color change or visual indicator on object collision.
Ensure single-trigger behavior (no rapid flicker).

🔴 Mission 3 – Basic Collision Bounce

Reverse velocities for both objects upon collision (arcade style).

🔵 Mission 4 – Axis Separation

Resolve horizontal and vertical overlap independently to prevent sticking.

🟣 Mission 5 – Mass Introduction

Add mass property to objects.

🟤 Mission 6 – Elastic Collision Formula

Implement 1D elastic collision equations per axis.

🟢 Mission 7 – Stability Verification

Prevent energy gain/loss and eliminate drift bugs.

🟡 Mission 8 – Collision Event System

Separate detection from reaction using clean event signaling.

🔵 Mission 9 – Object Subclasses

Create specialized subclasses (HeavyBall, LightBall, etc.).

🟠 Mission 10 – Sound Layer

Add audio response tied to collision strength and type.

🔴 Mission 11 – World Class

Introduce World to manage objects and environment.

🟣 Mission 12 – Full Decoupling

Remove reliance on p5 globals entirely.