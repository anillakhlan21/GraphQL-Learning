Here’s a concise README.md focusing only on the different routes for your given db.json:

# API Routes for JSON Server

## Users Routes

- **Get all users**:  
  `GET /users`

- **Get a user by ID**:  
  `GET /users/:id`

- **Filter users by company**:  
  `GET /users?companyId=<companyId>`

- **Get users with their company details**:  
  `GET /users?_expand=company`

---

## Companies Routes

- **Get all companies**:  
  `GET /companies`

- **Get a company by ID**:  
  `GET /companies/:id`

- **Get companies with their users**:  
  `GET /companies?_embed=users`

---

### Notes
- Use `_expand` to fetch parent relationships (e.g., user’s company).  
- Use `_embed` to fetch child relationships (e.g., company’s users).  
- Default server runs at `http://localhost:3000`. Adjust the port as needed using `--port <port>`.

This structure keeps it focused and clear.