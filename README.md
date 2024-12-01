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

## 4. Not found/404 Page

Nest js by default displays the basic 404 page if no route is found, but we may use our own 404 page to display when no request route exists. To make that page, we can

Create the not-found.tsx page in either the root label of the app directory or a separate directory.

## 5. Private Folder

The private folder in Next.js can be used as a convention for storing files or utilities that are not meant to be directly exposed to the client or imported freely throughout the application. In order to make the folder private add \_ before the folder name. `For eg: _lib `

#### Reason of using Private Folder

- The private folder in Next.js is used as a convention to store server-only utilities, configurations, and sensitive logic.
- It helps organize internal code, such as database connections and API handlers, that should not be exposed to the client.
- Files in the private folder should only be imported into server-side functions like getServerSideProps or API routes.
- This separation prevents sensitive logic from being bundled into client-side builds and ensures better security.
- Using a private folder enhances code maintainability by clearly distinguishing internal utilities from public-facing code.

## 6. Route Group

Route groups in Next.js allow for cleaner, modularized project structures, helping organize pages logically without affecting the public-facing URLs. This is especially useful for large applications with complex routing needs.

> **Note:** If we create a layout.tsx file inside the group folder at the top level, it will only be shared inside that group and not with others.

Benefits:

- Organize Complex Code: Helps to group related pages and components without impacting the public-facing URLs.
- Simplifies Nested Routes: Makes it easier to manage nested pages and routes without cluttering the folder structure.
- Cleaner Codebase: Provides a clearer way to structure the application, especially in large projects.

## 7. Layout

> In Next.js, layouts are a way to share UI components across multiple routes while preserving their state. When navigating between pages, layouts do not re-render and maintain interactivity. Layouts can be defined in specific files like layout.js or layout.tsx, and they wrap the content of child routes using the children prop.

Layouts can be nested to build complex page structures. For example, a root layout wraps around all pages in the application, while a specific route like /dashboard can have its own layout that shares a sidebar or header, wrapping pages within that route.

The root layout is essential and should be placed in app/layout.tsx, which wraps the entire application. It contains the html and body tags, and all other layouts will be nested inside it. For more specific routes like /dashboard, you can add a layout in the app/dashboard/layout.tsx file.

Layouts are Server Components by default, but can also be client-side components if needed. They do not have direct access to the current pathname or route segments, but this can be handled in client components using hooks like usePathname. Additionally, layouts can be used for data fetching, though passing data directly between a parent layout and its children is not possible.

Layouts are a powerful feature in Next.js, especially when working with nested route structures, and they help maintain consistent UI elements such as headers and sidebars across multiple pages. For detailed guidance, you can refer to the official Next.js documentation on routing and layouts​

## 8. Metadata

Nest js provide and Metadata API which allows us to define the metadata of each page which ensure proper seo for increasing visibility and attracting users.
Metadata ensures accurate and relevant information is displated when your page is served or indexed.

#### Configuring Metadata

a. Export a static metadata object
b. Export ad dynamic generateMetadata functions

#### Rules

a. Both layout.tsx and page.tsx can export metadata.
c. If metadata exists in a layout, it will apply to all pages inside that layout.
c. If defined in a page, it will only apply to that page.
c. If metadata is available in both the layout and the page, the page will have the highest priority if they have the same property.

### Title Metadata

In the title metdata we can pass the string and object as a value. In case of object we have 3 properties
a. absolute: replace the template
b. default: If the child page doesn't have any title then this text will be rendered `"This is the default title"`
c. template: for dyanmically render the title `"%s |Rajan Midun"` in the child page we can have title as `"Coding"` and the result will be `Coding | Rajan Midun`
