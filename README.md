# NEXT JS v15 GUIDE

## 1. What is Next.Js?

- Next is the react framework for building scalable full-stack web application.
- Basically we use react for building the components and next js for additional features such as routing, bundling,compiling and more.
- We don't need to install any additional packages as nextjs provides everything we need.

## 2. Why Next.Js?

It basically simplifies the process of building the web application for production

- Routing
- API Routes
- Rendering (Server-side and Client side)
- Data fetching
- Styling
- Optimization
- Dev and prod build system

## 3. Routing

- Nest js use file-system based router where folder are used to define the routes.
- By default the page file inside the app directory acts as the home page of the website.
- Each folder represents a route segment that maps to the URL segment.
- To create a nested route we should put a folder inside the folder.
  > **For eg:** If we want to create `/dashboard/analytics` then we have to create a dashboard folder and inside which an analytics folder

### Routing scenario

1. Basic routing :=> `/about`
2. Nested routing :=> `/blog/first`
3. Dynamic routing :=> `/blog/1 OR /blog/2 ....`
4. Nested dynamic routing :=> `/blog/1/review/1`
5. Catch all segment :=> If you want to catch every nested route inside the same page you can use this [...slug]
   > **For eg:** If we want to handle `/docs/1/reviews/1/like/1` in the same file we can use this concept. In the given folder structure
   > we don't have the page.tsx for the docs dir so to use the same page.tsx which is inside the [...slug] we can update the folder name as [[...slug]]
