Learning react with Divya Sharma

Assignment 1:

Set up a new React project using Create React App or any preferred method.
Install React Router DOM package (react-router-dom).

Basic Routing:
    Create three main pages/components: Home, About, and Contact.
    
    Implement routing in your main application component (App.js) using <BrowserRouter> and <Route> components.
    
    Create navigation links in a navigation bar or sidebar component using <Link> component to navigate between different pages.

Nested Routes:
    Create a Product component representing a product details page.
    
    Implement nested routes by defining a route for products within the About page.
    Define routes for nested components using <Route> within parent components.
    
    Test navigation between the About page and the nested Product details page to ensure proper functionality.

Route Parameters:
    Create a Blog component representing a blog post page.
    
    Define a dynamic route for the Blog component that accepts a post ID as a parameter (e.g., /blog/:postId).
    
    Access the route parameter (post ID) in the Blog component using useParams() hook or withRouter HOC (Higher Order Component).
    
    Display the blog post content based on the provided post ID.

Programmatic Navigation:
    Implement programmatic navigation in the Contact component.
    Create a button or link that, when clicked, navigates to the Home page programmatically.
    Test the functionality to ensure the Contact component navigates to the Home page upon button click.

Redirects and Error Handling:
    Set up a redirect from a non-existent route to the Home page.
    Implement a catch-all route (<Route path="*">) in the main application component (App.js) to handle unknown routes.
    Create a custom error component to display a friendly error message for unknown routes.
    Test redirection and error handling scenarios to ensure the application behaves as expected.