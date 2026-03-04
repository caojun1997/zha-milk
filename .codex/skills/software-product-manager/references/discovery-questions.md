# Discovery Questions Framework

## Purpose
This framework guides product discovery conversations to uncover user needs, requirements, and constraints that may not be explicitly stated. Use these questions strategically—not as a checklist, but as tools to understand the problem space deeply.

## Discovery Phases

### Phase 1: Understanding the Problem
Start here to understand what the user is really trying to solve.

#### Core Problem Questions
- What problem are you trying to solve?
- Who experiences this problem? (users, customers, internal team?)
- How do they currently solve this problem today?
- What prompted you to want to solve this now?
- What happens if this problem isn't solved?
- How much time/money/effort is currently spent on this problem?

#### Impact Questions
- Who will use this solution?
- How many users are we talking about?
- How often will they use it?
- What's the impact of this problem on users? (frustration, cost, time, etc.)
- Are there different types of users with different needs?

### Phase 2: Understanding the Context
Learn about the environment and constraints.

#### Environment Questions
- What devices/platforms do users work on? (desktop, mobile, tablet)
- What operating systems? (Windows, macOS, Linux, iOS, Android)
- What's their technical expertise level? (novice, intermediate, expert)
- What other tools/systems do they currently use?
- What's their typical workflow before and after using this solution?
- Are they usually online or offline when they'd use this?
- Do they work alone or collaborate with others?

#### Constraint Questions
- Are there any technical constraints? (must integrate with X, must run on Y)
- Are there any regulatory/compliance requirements? (GDPR, HIPAA, etc.)
- Are there any security requirements?
- What's the timeline expectation?
- Is there a budget constraint?
- Are there any performance requirements? (speed, scale, reliability)

### Phase 3: Exploring the Solution Space
Understand what success looks like and explore alternatives.

#### Success Questions
- How will you know this solution is successful?
- What would make this solution great vs. just okay?
- What's the minimum that would be useful?
- What would be a "nice to have" vs. "must have"?
- How will users discover/access this solution?
- What would make users choose this over their current approach?

#### Alternative Exploration
- Have you looked at existing solutions? Why don't they work?
- If you could wave a magic wand, what would the ideal solution look like?
- Are there parts of existing tools that work well we should learn from?
- What if we approached this differently by [alternative approach]?
- Would [simpler alternative] solve the core problem?

### Phase 4: Uncovering Unstated Requirements
Probe deeper to find hidden needs and assumptions.

#### User Experience Questions
- Walk me through what a user would do from start to finish.
- What should happen if [error scenario]?
- What if the user wants to undo or cancel?
- What should happen if there's no internet connection?
- How should the system handle [edge case]?
- What if they've never used this before—how do they learn?

#### Data Questions
- What data needs to be stored?
- How long should data be kept?
- Who should have access to what data?
- What if data gets deleted accidentally?
- Does data need to be exportable?
- Are there any privacy concerns?

#### Integration Questions
- Does this need to work with any existing systems?
- Where does the data come from?
- Where does the data need to go?
- Do you need to import from other tools?
- Do you need to export to other tools?
- What format should imports/exports be in?

#### Assumption-Challenging Questions
- You mentioned [X]. Why is that important to you?
- What makes you think [Y] is the best approach?
- Have you considered [alternative]?
- What would happen if we did [different approach] instead?
- Is it possible that [different solution] might work better?

## Question Techniques

### Open-Ended Questions
Use these to get detailed responses:
- "Tell me about..."
- "Walk me through..."
- "Describe a time when..."
- "How do you currently..."
- "What would you expect to happen when..."

### Clarifying Questions
Use these to dig deeper:
- "Can you give me an example of that?"
- "What do you mean by [term]?"
- "Help me understand why that's important."
- "Tell me more about [aspect]."

### Probing Questions
Use these to uncover hidden requirements:
- "What happens if...?"
- "What about when...?"
- "How would you handle...?"
- "What if the user wants to...?"

### Priority Questions
Use these to understand what matters most:
- "If you could only have three features, what would they be?"
- "What would you be willing to compromise on?"
- "What's absolutely essential vs. nice to have?"
- "What would make you choose not to use this solution?"

### Validation Questions
Use these to confirm understanding:
- "So what I'm hearing is... Is that right?"
- "Let me summarize to make sure I understand..."
- "It sounds like... Am I understanding correctly?"

## Red Flags to Watch For

These indicate you should dig deeper:

### Vague Requirements
- "Make it user-friendly" → Ask: What does user-friendly mean to you? What would make it unfriendly?
- "It should be fast" → Ask: How fast? What's acceptable vs. unacceptable?
- "It needs to scale" → Ask: To how many users? What volume of data?

### Technical Solutions Masquerading as Requirements
- "We need a REST API" → Ask: What problem are you trying to solve with an API?
- "Use a microservices architecture" → Ask: What requirements drive that decision?
- "Store data in MongoDB" → Ask: What are the data needs and characteristics?

### Assumed Knowledge
- "Users will just know how to..." → Ask: How do they learn? What if they don't know?
- "It's obvious that..." → Ask: Obvious to whom? Can you walk me through it?
- "Users already have..." → Ask: Do all users? What if they don't?

### Over-Specified Solutions
- User describes exact UI/UX → Ask: What user problem does this solve? Why this approach?
- User describes exact technical implementation → Ask: What's the user need driving this?
- "It must work exactly like [other app]" → Ask: What about that app works well? What doesn't?

### Missing Error Cases
- Only describes happy path → Ask: What if [error scenario]? How should that be handled?
- Assumes perfect inputs → Ask: What if user enters invalid data? How do we guide them?
- Ignores edge cases → Ask: What about [unusual but valid scenario]?

## Conversation Flow Tips

### Don't Interrogate
- Ask 2-3 questions at a time, then let the user respond fully
- Build on their answers naturally
- Share your thinking: "I'm asking because..."
- Make it collaborative: "Let's think through this together..."

### Listen Actively
- Pay attention to what they emphasize
- Notice what they assume but don't state
- Watch for contradictions or inconsistencies
- Pick up on pain points and frustrations

### Offer Alternatives Gently
When you see a better approach:
- "Have you considered...?"
- "Another approach might be..."
- "I wonder if... would solve this more simply?"
- "What if we stepped back and looked at it differently?"

### Know When to Push Back
If they're asking for something inadvisable:
- Explain the downside clearly
- Offer better alternatives
- Show how the alternative meets their real need
- Example: "I understand you want [X], but that might cause [problem]. What if we did [Y] instead, which would give you [benefit]?"

### Summarize and Validate
After exploring:
- "Let me make sure I understand..."
- List key requirements and priorities
- Highlight any assumptions or open questions
- "Does that capture it? What am I missing?"

## Common Scenarios and Key Questions

### CLI Application
- What commands/actions do users need?
- What are the expected inputs and outputs?
- How should errors be displayed?
- Do they need help documentation built in?
- Should it support batch operations or just one-at-a-time?
- How should progress be shown for long operations?
- What configuration options are needed?

### Mobile App
- iOS only, Android only, or both?
- Should it work offline?
- Will users need to sync data across devices?
- What about push notifications?
- How much data will be stored locally?
- What about camera, location, or other device features?
- How should it handle different screen sizes?

### Web Application
- Who hosts it (user or you)?
- Does it need to work on mobile browsers?
- Should data persist between sessions?
- What browsers need to be supported?
- Does it need authentication?
- Should multiple users be able to collaborate?
- What about data privacy/security?

### Desktop Application
- What operating systems?
- Should it run in the background?
- Does it need system-level access?
- How is it installed/updated?
- What about system tray/menu bar integration?
- Should it start on system boot?

### Automation Tool
- What triggers the automation?
- How often should it run?
- What should happen if it fails?
- Should users be notified of results?
- What if conditions change during execution?
- How are errors logged?
- Can users customize the automation?

## Anti-Patterns to Avoid

### Over-Questioning
- Don't ask everything at once
- Don't ask questions you don't need answers to
- Trust the user to tell you important details

### Under-Questioning
- Don't accept vague requirements without clarification
- Don't skip error cases and edge cases
- Don't assume you understand without confirming

### Leading Questions
- ❌ "Don't you think it would be better if...?"
- ✅ "How do you think we should handle...?"

### Yes/No Questions (Usually)
- ❌ "Do you need authentication?"
- ✅ "How should users access their data? Should it be private?"

### Jargon Without Explanation
- Don't assume user understands technical terms
- Don't use PM jargon (MoSCoW, RICE, etc.) without context
- Explain concepts simply when needed
