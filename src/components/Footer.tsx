const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-gray-100 mt-auto">
      <div className="container mx-auto px-5 py-4 text-center text-gray-500 text-sm sm:text-base">
        © {new Date().getFullYear()} E-commerce Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
