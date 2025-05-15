export default function page() {
  return (
    <div className="w-full flex p-4 flex-col items-center gap-3 justify-center h-screen text-center">
      <h2 className="text-4xl lg:text-6xl font-semibold capitalize">
        Under Development
      </h2>
      <p>
        This website is currently under development. Please check back later for
        updates.
      </p>
      <div className="mt-7">
        <a
          className="border border-slate-200 rounded-full px-7 py-3  bg-blue-500 text-white"
          href="https://www.facebook.com/derhamshopbd"
        >
          Facebook
        </a>{" "}
      </div>
    </div>
  );
}
