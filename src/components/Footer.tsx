const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vaishnav Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 