# Software Design Patterns and Best Practices

## Purpose
This guide provides proven design patterns and best practices for common software product scenarios. Use these to guide design decisions and suggest better alternatives to customers.

## User Experience Patterns

### Progressive Disclosure
**Pattern**: Show only essential information initially, reveal more as needed.

**When to use**: Complex features with many options, onboarding flows, advanced settings.

**Good example**:
- Basic search box → Advanced filters hidden behind "More options"
- Simple form → "Advanced settings" expands additional fields
- Wizard with "Basic" vs "Advanced" mode

**Why it works**: Prevents overwhelming users while keeping power features accessible.

### Undo Instead of Confirm
**Pattern**: Let users act immediately, make it easy to undo rather than asking for confirmation.

**When to use**: Non-destructive or easily reversible actions.

**Good example**:
- Email: "Send" button → "Undo send" toast notification
- Delete: Immediate delete → "Undo" button → After 30 seconds, permanent
- Edit: Auto-save → Version history for recovery

**Avoid**: Confirmation dialogs for routine actions ("Are you sure you want to save?")

**Why it works**: Reduces friction, speeds up workflows, builds trust.

### Inline Validation
**Pattern**: Validate input as user types, not just on submit.

**When to use**: Forms, data entry, fields with specific requirements.

**Good example**:
- Email field shows checkmark when valid format entered
- Password strength meter updates as user types
- Username availability checked in real-time

**Why it works**: Immediate feedback prevents frustration of failed submissions.

### Empty States
**Pattern**: Design for when there's no data yet.

**When to use**: Lists, dashboards, search results, first-time use.

**Good example**:
- New user sees: "Welcome! Add your first [item]" with clear CTA button
- Empty search: "No results for 'xyz'. Try different keywords or check spelling"
- Deleted all items: "All caught up! Nothing here yet"

**Avoid**: Blank screens, confusing messages like "Error: No data"

**Why it works**: Guides users on what to do next, prevents confusion.

### Loading States
**Pattern**: Show clear feedback during operations that take time.

**When to use**: Any operation taking >0.5 seconds.

**Good example**:
- Spinner with message: "Downloading your tweets..." (not just a spinner)
- Progress bar for longer operations: "Downloading 47 of 200 tweets..."
- Skeleton screens that preview the layout

**Why it works**: Reduces perceived wait time, prevents user anxiety.

### Error Recovery
**Pattern**: Make errors recoverable and guide users to fix them.

**When to use**: Any error state.

**Good example**:
- "Can't connect. Check your internet and try again" → "Retry" button
- "Invalid email format. Use format: name@example.com" → Highlights field
- "File too large (5MB). Maximum size is 2MB" → Link to image compressor

**Avoid**:
- Generic errors: "Error 500"
- No recovery path: "Failed. Contact support"
- Blame: "You entered invalid data"

**Why it works**: Empowers users to fix problems themselves.

## Architecture Patterns

### Start Simple, Evolve Later
**Pattern**: Begin with the simplest architecture that works, add complexity only when needed.

**When to use**: New projects, MVPs, unproven ideas.

**Good example**:
- Start: Single file script
- Scale: Add modules as code grows
- Scale more: Add database when data grows
- Scale more: Add caching when performance needed

**Avoid**: Starting with microservices, complex frameworks, or over-engineering before you have users.

**Why it works**: Faster to build, easier to change, lower cost until you validate the idea.

### Separation of Concerns
**Pattern**: Keep different responsibilities in different places.

**When to use**: Any codebase larger than a single script.

**Good example**:
- CLI app: command parsing → business logic → data storage (separate files)
- Web app: UI components → API calls → state management (separate layers)

**Why it works**: Easier to test, maintain, and modify individual parts.

### Configuration Over Code
**Pattern**: Make behavior configurable without changing code.

**When to use**: Settings users might want to customize, environment differences.

**Good example**:
- CLI: `--output-format json|csv` rather than editing code
- Config file: `settings.json` for preferences
- Environment variables: API keys, database URLs

**Why it works**: Users can customize without being programmers.

## Data Management Patterns

### Local First, Sync Later
**Pattern**: Store data locally, sync to cloud when possible.

**When to use**: Apps that need offline functionality, mobile apps.

**Good example**:
- Mobile app works offline, queues changes, syncs when online
- Desktop app stores data locally, backs up to cloud periodically

**Why it works**: Better performance, works without internet, prevents data loss.

### Graceful Degradation
**Pattern**: When something fails, fall back to limited functionality rather than complete failure.

**When to use**: Network dependencies, external APIs, optional features.

**Good example**:
- Image loading fails → Show placeholder
- API rate limit hit → Show cached data with "May be outdated" note
- Feature unavailable → Disable but explain why

**Why it works**: App remains useful even when things go wrong.

### Eventual Consistency
**Pattern**: Accept that data might be briefly out of sync, rather than blocking.

**When to use**: Collaborative apps, sync across devices, real-time updates.

**Good example**:
- Show local change immediately, sync in background
- Multiple devices editing → Merge changes later
- Show "Syncing..." indicator but don't block interaction

**Why it works**: Better user experience, no waiting for sync.

## API Design Patterns

### REST for CRUD
**Pattern**: Use standard HTTP methods for create, read, update, delete operations.

**When to use**: Web APIs, mobile backends, integrations.

**Good example**:
```
GET /tweets          → List tweets
GET /tweets/123      → Get specific tweet
POST /tweets         → Create tweet
PUT /tweets/123      → Update tweet
DELETE /tweets/123   → Delete tweet
```

**Why it works**: Standard, well-understood, works with existing tools.

### Rate Limiting
**Pattern**: Limit how often APIs can be called.

**When to use**: Any API, especially external-facing ones.

**Good example**:
- 100 requests per hour per user
- Return HTTP 429 with "Retry-After" header
- Show user their limit and usage

**Why it works**: Prevents abuse, ensures fair usage, protects infrastructure.

### Versioning
**Pattern**: Version your API so you can make changes without breaking existing users.

**When to use**: Any API others depend on.

**Good example**:
- `/v1/tweets` → `/v2/tweets` when making breaking changes
- Support old version for 6-12 months while users migrate

**Why it works**: Users can upgrade on their schedule.

## Security Patterns

### Authentication vs Authorization
**Pattern**: Separate "who you are" from "what you can do".

**Authentication**: Verify identity (login)
**Authorization**: Check permissions (can this user do this action?)

**Good example**:
- Login with email/password (authentication)
- Check if user owns the data they're trying to modify (authorization)

### Principle of Least Privilege
**Pattern**: Give users minimum permissions needed, no more.

**When to use**: Any system with different user types or sensitive data.

**Good example**:
- Regular users can view their own data
- Admins can view all data
- Super admins can delete data

### Defense in Depth
**Pattern**: Multiple layers of security, not just one.

**Good example**:
- Input validation on client AND server
- Authentication AND authorization checks
- Rate limiting AND API keys

**Why it works**: If one layer fails, others provide protection.

## Performance Patterns

### Lazy Loading
**Pattern**: Load data only when needed, not all upfront.

**When to use**: Large datasets, images, features not immediately visible.

**Good example**:
- Load first 20 tweets, load more when user scrolls
- Load images as they become visible
- Load "Export" feature only when user clicks "Export"

**Why it works**: Faster initial load, saves bandwidth.

### Caching
**Pattern**: Store frequently accessed data to avoid repeated work.

**When to use**: Expensive operations, frequently accessed data, API calls.

**Good example**:
- Cache API responses for 5 minutes
- Cache processed images
- Remember user preferences

**Why it works**: Much faster than regenerating or refetching.

### Debouncing
**Pattern**: Wait until user stops typing before taking action.

**When to use**: Search-as-you-type, auto-save, live validation.

**Good example**:
- Wait 300ms after user stops typing to search
- Auto-save after 1 second of no edits

**Why it works**: Reduces unnecessary work, saves API calls.

## Common Anti-Patterns to Avoid

### Over-Automation
**Problem**: Automate everything without user control.

**Example**: Auto-send emails without review, auto-delete files without confirmation.

**Better**: Give users control: "Auto-save draft" vs "Auto-send", "Schedule delete" vs "Immediate delete"

### Feature Creep
**Problem**: Add every requested feature without prioritization.

**Example**: Simple note app becomes project management, calendar, and email client.

**Better**: Stay focused on core value, say no to off-mission features.

### Magic Numbers
**Problem**: Hardcode values without explanation.

**Example**: `if count > 47:` Why 47?

**Better**: `MAX_TWEETS_PER_REQUEST = 100` with comment explaining why.

### God Objects
**Problem**: One module/class does everything.

**Example**: A single "Manager" class with 50 methods handling all app logic.

**Better**: Break into focused modules: UserManager, DataManager, UIManager, etc.

### Premature Optimization
**Problem**: Optimize before you know where the bottleneck is.

**Example**: Spend week optimizing database queries when the real problem is image loading.

**Better**: Build it working first, measure where it's slow, optimize that part.

### Not Invented Here (NIH) Syndrome
**Problem**: Rebuild everything from scratch instead of using existing solutions.

**Example**: Write custom authentication system instead of using OAuth.

**Better**: Use proven libraries and services, focus on your unique value.

## Decision Framework

### When to Suggest an Alternative

**The customer's approach has issues if**:
- It's significantly more complex than needed for their use case
- It has major usability problems
- It's technically infeasible or extremely difficult
- It doesn't match their actual stated goals
- There's a much simpler solution that achieves the same outcome
- It violates common security or privacy best practices

**How to suggest alternatives**:
1. Acknowledge their idea: "I understand you want to..."
2. Explain the concern: "One challenge with that approach is..."
3. Offer alternative: "What if we did... instead? That would give you..."
4. Show benefit: "This would be simpler/faster/more secure because..."
5. Get feedback: "What do you think?"

**Example**:
"I understand you want to automatically delete files without confirmation. One challenge is users might lose important data accidentally. What if we moved files to a 'Trash' folder first, then auto-delete after 30 days? That gives you the storage space while protecting against accidents. Would that work?"

### When to Build Custom vs Use Existing

**Build custom when**:
- Core differentiator of your product
- Existing solutions don't fit your needs
- Integration cost > build cost
- You need full control

**Use existing when**:
- Common solved problem (authentication, payments, email)
- Not your competitive advantage
- Proven solution exists
- Faster time to market matters

### Choosing the Right Complexity Level

**Simple solution** (single file, basic logic):
- Personal tools
- Prototypes and MVPs
- <100 users
- No collaboration needed

**Medium complexity** (multiple files, some structure):
- Small team tools
- 100-1000 users
- Some collaboration
- Needs to be maintained

**Complex solution** (frameworks, architecture):
- Production apps
- 1000+ users
- Team collaboration
- Long-term maintenance
- Critical business function

## Platform-Specific Considerations

### CLI Applications
**Best practices**:
- Follow Unix philosophy: do one thing well
- Support piping and composition
- Provide `--help` documentation
- Use consistent flag naming conventions
- Show progress for long operations
- Make it scriptable (exit codes, machine-readable output)

### Mobile Apps
**Best practices**:
- Design for thumb reach on large screens
- Handle interruptions (phone calls, notifications)
- Minimize battery drain
- Work offline when possible
- Respect user's data plan
- Follow platform conventions (iOS vs Android)

### Web Apps
**Best practices**:
- Responsive design (desktop, tablet, mobile)
- Fast load times
- Keyboard shortcuts for power users
- Handle back button correctly
- Secure (HTTPS, CSP headers)
- Accessible (WCAG 2.1 AA)

### Desktop Apps
**Best practices**:
- Cross-platform when possible
- Native look and feel
- System tray/menu bar integration
- Reasonable resource usage
- Handle updates gracefully
- Offline capable
