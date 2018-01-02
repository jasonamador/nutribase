# NutriBase
NutriBase is being created to help people set nutritional goals, easily track their food intake, and view and assess their progress over time in meaningful ways using interactive graphs and tables.

## Base User Experience
* As a newcomer I should be able to create a new user
  - email
  - password
  - goals
  - name: fat, polarity: true (true = goal, false = limit)
  
GET /users/login - get login form
POST /users/login - login
POST /users/logout - logout
GET /users/profile - get a user profile
POST /users/profile - create a user profile
PATCH /users/profile - update a user profile

GET /meals/dates/:day - get the meals from a single day
GET /meals/dates/:from/:to - get the meals in a given date range

GET /dashboard - pulls the dashboard view which will make a bunch of ajax calls to get the user profile and meals for the day
GET /dashboard/details

GET /foods/:id - gets a single food profile
GET /foods/group/:group - gets all the foods in the specified group
GET /foods - get all the foods
