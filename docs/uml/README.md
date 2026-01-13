# UML Documentation

This document describes the **UML diagrams** used in this project, their **purpose**, and **how to visualize them** from the source files.

The UMLs were designed to provide **clear technical documentation**, support **architectural decisions**, and serve as a reference for **development, onboarding, and maintenance**.

---

## 🎯 Purpose of the UMLs

The UML diagrams in this project aim to:

- Provide a **high-level understanding** of the system
- Document **business rules and constraints**
- Represent the **database structure and relationships**
- Describe **data flow and system architecture**
- Reduce ambiguity between frontend, backend, and database layers
- Serve as a long-term **technical reference**

These diagrams are especially useful in:
- Team collaboration
- Code reviews
- Technical interviews and portfolio presentation

---

## UML Diagrams Overview

### Entity Relationship Diagram (ERD)

**Purpose:**  
Represents the **conceptual data model** of the application.

**What it shows:**
- Core entities (User, Occurrence, Pet, Image, Notice, etc.)
- Relationships and cardinality
- Business constraints (e.g. one active occurrence per user)
- Cascade delete rules

**Why it matters:**  
The ERD helps understand **how data is structured and connected**, independent of any specific database engine.

---

## 🧭 Why UML Was Chosen

UML was chosen because it:
- Is **technology-agnostic**
- Is easy to read and share
- Helps visualize complex rules and flows
- Scales well with system growth
- Is widely recognized in professional environments

Using UML reduces the need to explain architecture verbally and helps keep documentation **up-to-date with code**.

---

## 👀 How to Visualize the UML Diagrams

### 🔹 Mermaid Diagrams

The database diagram are written using **Mermaid syntax**.

You can visualize them in:
- GitHub (native support)
- GitLab
- Notion
- Markdown editors with Mermaid enabled

📁 Example file:
```
/docs/uml/database-schema.mmd
```

No additional setup is required if your platform supports Mermaid.

---

### 🔹 PlantUML Diagrams

Some diagrams use **PlantUML** syntax.

You can visualize them using:

#### Option 1 — Online Viewer
1. Open: https://www.plantuml.com/plantuml
2. Paste the UML code
3. The diagram will be rendered automatically

#### Option 2 — VS Code Extension
- Install the **PlantUML** extension
- Install **Graphviz**
- Open the `.puml` file and preview it

📁 Example file:
```
/docs/uml/data-flow.puml
```

---

## 📁 Suggested Folder Structure

```
docs/
 └─ uml/
     ├─ erd.mmd
     ├─ database-schema.mmd
     ├─ data-flow.puml
     └─ README.md
```

This structure keeps UML documentation **organized and isolated from source code**, while remaining easy to maintain.

---

## 🔄 Keeping UMLs Updated

Whenever a significant change occurs (new entity, new rule, new flow), the corresponding UML should be updated to reflect the new reality.
UMLs are considered part of the **source of truth** for the system architecture.
