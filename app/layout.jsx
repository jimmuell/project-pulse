import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find the perfect rental property",
  description: "Find your dream rental property",
  keywords: "rental, property, real estate, house, apartment",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
