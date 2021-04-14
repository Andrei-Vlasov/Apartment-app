# What can we do with application

## Register

`/register` path

1. Form for entering username and password, name, surname, phone, email, city
2. Checking for appropriate enterings
3. User's name + password goes to db

## Login

`/login` path

1. Form for entering name+pass
2. Checking for correctness
3. If such user is in db, login is successful

## Add apartment

`/add` path

1. If user is logged in
2. Fill form:
   - City
   - District
   - Type (sell, rent, per-day)
   - Rooms number
   - Address
   - Cost
   - Photos
   - Phone
   - Email
3. Apartment goes to db, with parameter of user who added it and unique id for future updating

## List your added apartments

`/list` path

1. If user is logged in
2. Query db with user parameter constraint
3. Get apartments in special forms

## Update your added apartment

`/list/<unique_id>` path

1. If user is logged in
2. List your apartments
3. Click on button "Change" -> go to path with id
4. Change parameters
5. Create UPDATE query to db
6. on click "Save" button, execute query

## Delete your apartment

`/list/<unique_id>` path

1. If logged in
2. List your apartments
3. Click on button "Change" -> go to path with id
4. Press "Delete" button
5. Create DELETE query on unique_id
6. Execute query

## Search for apartments

`/search` path

1. Choose parameters from filters
2. Query db with parameters constraints
3. Get apartments in special rectangular forms
4. If more than 10, split to pages by 10

## Admin user

`/admin` path

1. Login to admin
2. Search apartments
3. Delete unwanted with button
