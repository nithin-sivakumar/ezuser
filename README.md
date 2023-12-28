# ezuser 🚀

Simplify user management in your MERN (MongoDB, Express.js, React, Node.js) stack projects with this lightweight and versatile package! 🎉

## Installation

On your terminal, type the following and press `ENTER`

```bash
npm install @nithin-sivakumar/ezuser
```

OR

```bash
npm i @nithin-sivakumar/ezuser
```

For global installation, use the following:

```bash
npm install -g @nithin-sivakumar/ezuser
```

## Usage

```javascript
const ezuser = require("@nithin-sivakumar/ezuser");

// Configuration
ezuser.config(mongoUrl);

// User Operations
const userId = await ezuser.create(userData);
const updatedUser = await ezuser.update(userId, updatedUserData);
const removedUser = await ezuser.remove(userId);
const user = await ezuser.get(userId);
const userById = await ezuser.getById(userId);
const userByEmail = await ezuser.getByEmail(email);
const isValid = await ezuser.validator(data);
const strictUser = await ezuser.createStrict(userData);
const paginatedUsers = await ezuser.getPaginated(pageNumber, pageSize);
const secureUser = await ezuser.createSecure(userData);
const isPasswordValid = await ezuser.verifyPassword(password, hashedPassword);
const activeUsers = await ezuser.getActive();
const softDeletedUser = await ezuser.softDelete(userId);
const usersByQuery = await ezuser.getByQuery(query);

// Authentication
const emailLogin = await ezuser.loginByEmail(email, password);
const phoneLogin = await ezuser.loginByPhone(phoneNumber, password);
const usernameLogin = await ezuser.loginByUsername(username, password);
const verifiedToken = await ezuser.verifyToken(token);
```

NOTE that await must be used within an async function, but is not used in this code snippet for simplication. Do not copy this code and paste it directly

Explore the full [documentation](https://github.com/nithin-sivakumar/ezuser) for detailed usage instructions and examples.

## Functionalities and Controllers 🛠️

- `config`: Configure your MERN user manager.
- `create`: Create a new user.
- `update`: Update user details.
- `remove`: Remove a user.
- `get`: Get all users.
- `getById`: Get a user by ID.
- `getByEmail`: Get a user by email.
- `validator`: Validate user data.
- `createStrict`: Create a user with strict validation.
- `getPaginated`: Get users in a paginated manner.
- `createSecure`: Create a user with secure password handling.
- `verifyPassword`: Verify if a password is valid.
- `getActive`: Get active users.
- `softDelete`: Soft delete a user.
- `getByQuery`: Get users based on a custom query.
- `loginByEmail`: Authenticate a user by email.
- `loginByPhone`: Authenticate a user by phone.
- `loginByUsername`: Authenticate a user by username.
- `verifyToken`: Verify the authenticity of a token.

## Contribution 🤝

We welcome contributions! Please follow these guidelines:

### How to Contribute

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with clear commit messages.
- Push your changes to your fork.
- Open a pull request, providing a detailed description of your changes.

### Labels

- `🐛 Bug`: Issues related to bugs or unexpected behavior.
- `✨ Enhancement`: Requests for new features or improvements.
- `🚀 Help Wanted`: Issues that are open for contributions.
- `👶 Good First Issue`: Beginner-friendly tasks.
- `📚 Documentation`: Issues related to documentation improvements.
- `💬 Needs Discussion`: Issues that require community input or discussion.
- `❌ Invalid`: Issues that are not valid or relevant.
- `🙅‍♂️ Won't Fix`: Issues that won't be addressed or fixed.
- `❓ Question`: Questions from contributors or users.
- `🎉 Feature Request`: Specific requests for new features.
- `🔒 Security`: Issues related to security vulnerabilities.
- `🔥 High Priority`: Issues that require urgent attention.
- `🔶 Medium Priority`: Issues that are important but not urgent.
- `🔵 Low Priority`: Issues that are less critical or can be deferred.
- `🚫 Blocked`: Issues or pull requests that are blocked by external factors.
- `🔍 Pending Review`: Changes that are awaiting review.
- `🚧 Invalid Input`: Issues related to invalid user input.
- `🔄 Refactoring`: Issues related to code refactoring.

### Issues

Before opening an issue, please:

- Check if the issue already exists.
- Provide clear steps to reproduce the issue.
- Code Style
- Adhere to the project's code style and linting rules.

### Reporting Templates

#### Bug Report

```
---
name: Bug Report
about: Create a bug report to help us improve
---

## Describe the Bug

A clear and concise description of what the bug is.

## Steps to Reproduce

1. Step 1
2. Step 2
3. ...

## Expected Behavior

A clear and concise description of what you expected to happen.

## Actual Behavior

A clear and concise description of what actually happened.

## Additional Context

Add any other context about the problem here. For example, your environment (OS, browser, etc.) and relevant screenshots.

## Possible Solution (Optional)

If you have a suggestion on how to fix the bug, provide it here.
```

#### Feature request

```
---
name: Feature Request
about: Suggest a new idea or enhancement
---

## Feature Description

A clear and concise description of the feature or enhancement.

## Use Case

Describe the use case or scenario where this feature would be beneficial.

## Proposed Solution

If you have a specific solution in mind, outline it here.

## Alternatives (Optional)

If there are alternative solutions or features you've considered, list them here.

## Additional Context

Add any other context, screenshots, or examples about the feature request here.

## Discussion

Any additional thoughts or discussions about this feature request can be added here.
```

## License 📝

This project is licensed under the [MIT License](./LICENSE).
