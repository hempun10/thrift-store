/* eslint-disable react/prop-types */

const FooterColumn = ({ title, links }) => {
  return (
    <div className="w-auto p-8">
      <h3 className="mb-7 text-black font-semibold tracking-tight">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-6 text-gray-200 tracking-tight">
            <a
              className="hover:text-black text-gray-500 tracking-tight transition duration-200"
              href="#"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <div className="flex flex-wrap justify-between -m-8">
      <FooterColumn
        title="Company"
        links={["About", "How it Works", "Vision", "Investors"]}
      />
      <FooterColumn
        title="Help"
        links={[
          "Customer Support",
          "Delivery Details",
          "Terms & Conditions",
          "Privacy Policy",
        ]}
      />
      <FooterColumn
        title="Resources"
        links={[
          "Free eBooks",
          "Development Tutorial",
          "How to - Blog",
          "Youtube Playlist",
        ]}
      />
      <FooterColumn
        title="Quick Links"
        links={["Shop", "Login / SignUp", "Cart", "My Profile"]}
      />
    </div>
  );
};

export default FooterBottom;
