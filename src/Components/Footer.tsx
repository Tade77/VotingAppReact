const Footer = () => {
  return (
    <footer className=" w-[100%] bg-green-500">
      <div className="container mx-auto pt-6">
        <img
          src="/public/LOGO.jpeg"
          className=" rounded-full w-20 h-20"
          alt=""
        />
        <article className="w-[500px] h-[200px] text-white my-5">
          The Independent National Electoral Commission (INEC) was established
          by the 1999 Constitution of the Federal Republic of Nigeria to among
          other things organize elections into various political offices in the
          country. The functions of INEC as contained in Section 15, Part 1 of
          the Third Schedule of the 1999 Constitution (As Amended) and Section 2
          of the Electoral Act 2010 (As Amended)
          <p>&copy; copyright 2024</p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
