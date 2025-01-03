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

- Export a static metadata object
- Export ad dynamic generateMetadata functions

#### Rules

- Both layout.tsx and page.tsx can export metadata.
- If metadata exists in a layout, it will apply to all pages inside that layout.
- If defined in a page, it will only apply to that page.
- If metadata is available in both the layout and the page, the page will have the highest priority if they have the same property.

### Title Metadata

In the title metdata we can pass the string and object as a value. In case of object we have 3 properties

- `absolute`: replace the template
- `default`: If the child page doesn't have any title then this text will be rendered `"This is the default title"`
- `template`: for dyanmically render the title `"%s |Rajan Midun"` in the child page we can have title as `"Coding"` and the result will be `Coding | Rajan Midun`

## 9. Link

Link is a react component which extends the html `<a>` element to prefetching and client-side navigation between routes.
It can take multiple props

- `href`=> It contains the path or URL to navigate to.
- `replace` => It will replace the current history state. Default value is `false`.
- `scroll` => It controls whether the page scrolls to the top after navigation. Default is `true`
- `prefetch` => It determines whether the page's data should be prefetched in the background. Default is `true`

> **Note:** If you want to programatically redirect the user to specific route then you can use `useRouter` front `next/navigation` package.

## 10. Template

Template are similar to the layout but it creates a new instance for each of their children on navigation.
This means when the user navigates between routes that shares the template, a new instance of the child is mounted.
DOM is recreated, state is not preservd in client component.

```js
export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
```

## 11. Loading UI and Steaming

- `loading.js:` Add a loading.js file for fallback UI (e.g., skeletons) during route loading, automatically wrapped in `<Suspense>`.
- `Fast Navigation:` Navigation is instant and interruptible, with interactive shared layouts.
- `Streaming:` Breaks HTML into chunks, sending high-priority components first, improving TTFB and FCP.
- `Suspense:` Wrap async components with `<Suspense>` to show fallback UI and enable progressive rendering.
- `SEO-Friendly:` Ensures head tags load first, making streaming server-rendered and SEO-compatible.

> **Note:** Suspense is a feature in React that helps manage asynchronous operations in your application. It allows you to show fallback UI (like loading spinners or skeletons) while waiting for asynchronous tasks to complete, such as fetching data or loading components.

```js
import React, { Suspense } from "react";

const MyComponent = React.lazy(() => import("./MyComponent"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  );
}
```

## 12. error.js OR error.tsx

- It is used the handle the unexpexted runtime errors and displays fallback UI.
- It wraps a route segment and its nested children in a `React Error Boundry`.

```js
'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
```

> **Note:** If the layout.tsx and error.tsx are in the same dir then the error inside the layout.tsx will not be catched by the error.tsx since layout is always sit at the top level like

```js
<Layout>
  <Template>
    <ErrorBoundry fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </ErrorBoundry>
  </Template>
</Layout>
```

## 13. Parallel Routes

- Parallel routes are the advance routing mechanism that allows for the simultaneous rendering of multiple pages in the same layout.
- In nest js we can define the parallel routes using the feature knowns as slots.
- Slots helps to structure our content in modular fashion.
- To define a slot, we use the `@folder` naming convention.
- Each slot is then passed as a prop to its corresponding `layout.tsx` file

#### Benefit

- Ability to split a single layout into multiple slots, making the code more manageable.
- Every slot of the layout can have its own loading and error state.
- Most important in the case where each section has its own loading speed.
- Each slot can essentially act as a mini-application, with its own navigation and state management.

## 14. Request Handler

- It allows to create custom request handlers for a given route using the web Request and Response API.
- Unlike page routes, which responds with the HTML content, route handlers allow you to create RESTful endpoints.
- Route handlers are server side, ensuring that sensative information like private keys remains secure and never gets shipped to the browser.
- It also helps to call the external API's.

- GET METHOD

  ```js
  export function GET(request: NextRequest) {
    const searchQuery = request.nextUrl.searchParams;
    const searchKeyword = searchQuery.get("search");

    let responseData = comments;

    if (searchKeyword)
      responseData = comments.filter((comment) =>
        comment.comment.includes(searchKeyword)
      );

    return Response.json(responseData);

    // return new Response("Hello world");
  }
  ```

> **Note:** If you want to set the status then use `return new Response('Comment not found',{status:404})`.ALso, if you want to redirect the user then you can use redirect method from `next/navigation` which takes routes as a params.

#### Request Header

- HTTP Headers represents the meta information about the API request and response
- HTTP request headers are sent by the client such as web browswer to the server. For e.g `User-Agent`, `Authorization` ,`Accept` etc
- HTTP response headers are send by the server to the client which provides the information about the server and the data being sent in the response. E.g, `Content-Type`,

  ```js
  import { type NextRequest } from "next/server";
  import { headers } from "next/headers";

  export async function GET(request: NextRequest) {
    const header = headers();
    console.log(header.get("Authorization"));

    return new Response("<h1>Hello Rajan", {
      headers: {
        "Content-Type": "text/html",
      },
    });
  }
  ```

## 15. Cookies

- It is a small piece of data that a server sends to a user' browser.
- The browser may store the cookie and send it back to the same server in the later requests.
- Basically we use cookies for Session management, Tracking the user behaviour etc.

  ```js
  import { type NextRequest } from "next/server";
  import { cookies } from "next/headers";

  export async function GET(request: NextRequest) {
    const cookieData = request.cookies.get("theme");
    cookies().set("resultsPerPage", 10);
    cookies().get("resultsPerPage");

    return new Response("<h1>Hello Rajan", {
      headers: {
        "Content-Type": "text/html",
        "Set-Cookie": "theme=dark",
      },
    });
  }
  ```

  > **Note:** We can use either `request header` or the `cookies` from `next/headers` to get or set the cookie.

## 16. Caching in Route handler

- Route handler are catched by default when using the GET method with the Response object in Next.JS.

> **Note:** If we don't want the cache in the route we can use `export const dynamic="force-dynamic"` at the top of the route.tsx file.

## 17. Middleware

- In next js middleware is a piece of code which runs in between the request response cycle.
- It has the ability to access the HTTP request and response object.

  ```js
  import { NextResponse, type NextRequest } from "next/server";

  export async function GET(request: NextRequest) {
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");
    if (!themePreference) response.cookies.set("theme", "dark");

    response.headers.set("custom-header", "custom-value");

    return response;

    // if (request.nextURL.pathname === "/profile") {
    //   return NextResponse.redirect(new URL("/home", request.url));
    // }
  }
  ```

## 18. Rendering

- It is the process of transforming the code you write into user interfaces.
- In next js choosing the right time and place to do this rendering is vital in building a performant application.

### Client side Rendering

- In this rendering the component code is directly transformed into a user interface within the browser(the client).

#### Drawbacks

- Generating a html that mainly contains a single div tag is not optimal for SEO as it provides less information for search engines to index.
- Having the browser handling all the works such as fetching data, computing UI, and making HTML interactive, can slow things down. User may see blank space or a loading spinner while the page loads.

## 19. Data Fetching

### Server side

```js
 export default async function UserListing() {
  const response=await fetch("https://jsonplaceholder.typicode.com/users",{
    cache:"no-store"
  });
  const users= await response.json();

   return (
     <>
    Render user data here
     <>
   )
 }
```

- If you handle and eror create error.tsx in the same dir and loading state create loading.tsx. Note that the error.tsx is a client compoent.

#### Caching

- Next js will automatically catched the fetch GET requests data in the server side, which eliminate the refetching of data in every request.
- When we send the get request during rendering, the next js will check the data cached for the cached response. `Rendering -> Data cached -> Data source`.
- You can find the cached data inside the `.next/fetch-cache` dir inside the project dir.
- If you want to Opt out the caching then you can pass the extra params in the request as `const response=await fetch("https://jsonplaceholder.typicode.com/     users",{cache:"no-store"});`
  > **Note:** if you specify the `no-store` for a fetch request the subsequent fetch requests will also not be catched. But if you want to use the default behaviour for the subsequent request you can use `export const fetchCache="default-cache"` at the top of the file/component.
  > **Note:** By default Next.js will catch the fetch() occurs before any dynamic functions such as cookies, headers, searchParams etc are used and will not cached requests found after these dynamic functions.
  > **Note:** If you want to cached the data for certain time only you can pass and object after the URL as {next:{revalidate:10}} which will only cache the data for 10 sec only. or you can use `export const revalidate=10` at the top of the file.

#### Request Memorization

- It is a technique that deduplicates requests for the same data within a single render pass.
- These approach allows for reuse of data in React components tree, prevents redundant network calls and enhance performance.
- For the initial request, data is fetched from external source and cached in memory.
- Subsequent requests for the same data within the same render pass retrieve the result from the memory, bypassing the need to make the request again.
- `Rendering -> Request Memorization -> Data Cache -> Data source`

## 20. Important Concepts

- If you have more than one component on a page and each component has a different response time, you may use the `<Suspense>` element to surround each component so that the data is shown as soon as it is ready.
- To restrict server functions (such as those exporting the DB URI) for server use only and client functions for client use only, you can use the `server-only `package by adding `import 'server-only'` in the file containing the server function. Similarly, we can use `client-only` for the function which should be only use in the client components.
- Third-party packages are typically used on the client side, but if you need to use them in a server component, you can create a child component, mark it as a client component. Then, import the client component into the server component.
- If you have a `client component` and its child components are not using `"use client"` keyword, all the child components will be treated as client componet.
  i.e, A server component can have client component as a child but a client component cannot have the server component as a child by default. But if you want to use a server component inside the client component then you need to take the sever component as a children props.

  ```js
  <ClientComponent>
    <ServerComponent />
  </ClientComponent>;

  // and inside the client component

  export default function ClientComponent({ children }: { children: React.ReactNode }) {
    return (
      <>
      {children}
      <>
    )
  }
  ```
