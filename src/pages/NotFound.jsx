export const NotFound = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center">
            <p className="text-secondary text-lg mb-2">404</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Page <span className="text-primary">Not Found</span>
            </h1>
            <p className="text-primary-foreground mb-8 max-w-md">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <a href="/" className="cosmic-button">
                Back to Home
            </a>
        </div>
    );
};
