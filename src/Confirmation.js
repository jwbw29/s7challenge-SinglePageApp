export default function Confirmation() {
  return (
    <>
      <div className="flex bg-primaryColor h-screen justify-center items-center">
        <div
          id="ty-modal"
          className="flex flex-col bg-tertiaryColor ring-secondaryColor ring-4 rounded-md h-96 w-confirm justify-around items-center p-8"
        >
          <h2 className="flex text-center font-modal text-6xl">Thank you!</h2>
          <p className="font-comicSans text-xl w-3/4 text-center">
            Your order has been received and will be ready shortly!
          </p>
        </div>
      </div>
    </>
  );
}
