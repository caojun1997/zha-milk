# User Story Template and Guidelines

## User Story Format

### Standard Template
```
As a [user persona/role],
I want to [action/goal],
So that [benefit/value].
```

### Enhanced Template (when more context helps)
```
As a [user persona/role],
I want to [action/goal],
So that [benefit/value],
Given [precondition or context].
```

## Components of a Good User Story

### Title
Brief, descriptive name for the story (e.g., "User can save favorite tweets")

### User Story Statement
Clear articulation of who, what, and why using the template above.

### Acceptance Criteria
Specific, testable conditions that must be met for the story to be complete. Use Given-When-Then format:

```
Given [initial context/state],
When [action is taken],
Then [expected outcome].
```

Multiple acceptance criteria may be needed:

```
AC1: Given the user is logged in,
     When they click the "Save Tweet" button,
     Then the tweet is added to their favorites list.

AC2: Given the user has no internet connection,
     When they attempt to save a tweet,
     Then they see an error message "No connection. Changes will sync when online."

AC3: Given the user has already saved a tweet,
     When they view that tweet,
     Then the "Save" button shows as "Saved" with a filled icon.
```

### Definition of Done
Checklist of criteria that apply to all stories:
- [ ] Code is written and reviewed
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Acceptance criteria are met
- [ ] Documentation is updated
- [ ] UI is accessible (if applicable)
- [ ] Performance meets requirements

## Priority and Sizing

### Priority Levels
- **P0 (Critical)**: Must have for MVP or release
- **P1 (High)**: Should have soon after MVP
- **P2 (Medium)**: Nice to have
- **P3 (Low)**: Future consideration

### Story Points (Relative Sizing)
- **1 point**: Trivial change, < 1 hour
- **2 points**: Simple feature, < 1 day
- **3 points**: Moderate complexity, 1-2 days
- **5 points**: Complex feature, 3-5 days
- **8 points**: Very complex, needs breakdown
- **13+ points**: Epic - must be broken down

## User Story Examples

### Example 1: Authentication Feature
**Title**: User can log in with email and password

**Story**:
```
As a returning user,
I want to log in with my email and password,
So that I can access my saved data and preferences.
```

**Acceptance Criteria**:
```
AC1: Given a user with a valid account,
     When they enter correct email and password,
     Then they are logged in and redirected to the dashboard.

AC2: Given a user enters an incorrect password,
     When they submit the login form,
     Then they see "Invalid credentials" and can try again.

AC3: Given a user enters an unregistered email,
     When they submit the login form,
     Then they see "No account found" with a link to sign up.

AC4: Given a user enters invalid email format,
     When they try to submit,
     Then the submit button is disabled and they see "Enter a valid email."

AC5: Given a user is already logged in,
     When they navigate to the login page,
     Then they are automatically redirected to the dashboard.
```

**Priority**: P0
**Story Points**: 3

### Example 2: Data Export
**Title**: User can export their data as CSV

**Story**:
```
As a power user,
I want to export my data as a CSV file,
So that I can analyze it in Excel or other tools.
```

**Acceptance Criteria**:
```
AC1: Given a user with data in their account,
     When they click "Export Data" in settings,
     Then a CSV file downloads containing all their records.

AC2: Given a user has no data,
     When they attempt to export,
     Then they see a message "No data to export yet."

AC3: Given the export takes longer than 5 seconds,
     When a user initiates export,
     Then they see a progress indicator and "Preparing your export..."

AC4: Given the CSV is ready,
     When it downloads,
     Then it includes column headers and properly formatted data.
```

**Priority**: P1
**Story Points**: 5

### Example 3: Offline Support
**Title**: User can access core features offline

**Story**:
```
As a mobile user with unreliable connectivity,
I want to access core features when offline,
So that I can continue working without interruption.
```

**Acceptance Criteria**:
```
AC1: Given a user loses internet connection,
     When they try to view previously loaded data,
     Then they can access it normally.

AC2: Given a user is offline,
     When they make changes to local data,
     Then changes are queued and synced when connection returns.

AC3: Given a user regains internet connection,
     When sync begins,
     Then they see a notification "Syncing your changes..."

AC4: Given sync fails due to conflicts,
     When the system detects conflicts,
     Then the user is prompted to resolve them.
```

**Priority**: P1
**Story Points**: 8

## Anti-Patterns to Avoid

### Too Technical
❌ "As a developer, I want to refactor the authentication module..."
✅ "As a user, I want to log in quickly..."

### Too Vague
❌ "As a user, I want the app to work better..."
✅ "As a user, I want pages to load in under 2 seconds..."

### No Clear Benefit
❌ "As a user, I want to see a sidebar."
✅ "As a user, I want to see a sidebar with navigation, so I can quickly access different sections."

### Too Large
❌ "As a user, I want complete user account management..."
✅ Break into: create account, edit profile, change password, delete account, etc.

## Tips for Writing Great User Stories

1. **Focus on the user, not the system**: Describe what users want to accomplish, not technical implementation
2. **Be specific in acceptance criteria**: Vague criteria lead to rework
3. **Include error cases**: Don't just describe the happy path
4. **Consider edge cases**: What happens with empty states, slow networks, etc.?
5. **Make them testable**: If you can't test it, refine the criteria
6. **Keep them independent**: Stories should be completable in any order when possible
7. **Add context in description**: Include background, mockups, or examples when helpful
8. **Collaborate**: Review stories with engineers and designers before committing
