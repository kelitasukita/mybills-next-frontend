import Button from "./Button";

export default function EditScreenModal() {
  return (
    <div className="lg:flex bg-black bg-opacity-50">
      <div className="flex flex-col bg-white rounded-r-3xl md:pl-4 md:w-4/5 lg:w-2/5 lg:pl-0">
        <article className="p-6 lg:px-8 lg:pt-14">
          <header className="flex justify-start items-center">
            <h1 className="heading-m text-gray-800">Edit </h1>
            <strong className="heading-m text-gray-400 ml-2">#</strong>
            <p className="heading-m text-gray-800">Mortgage</p>
          </header>

          <form action="/" className="flex flex-col mt-12">
            <label className="body-variant text-gray-400 mb-4  ">Description</label>
            <input className="focus:border-violet-500  heading-s text-gray-800 border border-gray-300 h-12 rounded-md p-4 mb-6" type="text" />

            <label className="body-variant text-gray-400 mb-4  ">Currency</label>
            <div className="flex justify-start items-center mb-8">
              <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-5 w-5 mr-1 " type="radio" name="currency" />
              <label>EUR</label>
              <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-5 w-5 mr-1 ml-4" type="radio" name="currency" />
              <label>BRL</label>
              <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-5 w-5 mr-1 ml-4" type="radio" name="currency" />
              <label>USD</label>
            </div>

            <label className="body-variant text-gray-400 mb-4  ">Value</label>
            <input className="focus:border-violet-500 heading-s text-gray-800 border border-gray-300 h-12 rounded-md p-4 mb-6" type="number" />

            <label className="body-variant text-gray-400 mb-4  ">Due date</label>
            <input className="focus:border-violet-500 heading-s text-gray-800 bg-transparent border border-gray-300 h-12 rounded-md p-4 mb-6" type="date" />

            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-start">
                <label className="body-variant text-gray-400 mb-4">Automatic Debit</label>
                <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-6 w-6 mb-6" type="checkbox" />
              </div>
              <div className="flex flex-col">
                <label className="body-variant text-gray-400 mb-4  ">Recurrent</label>
                <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-6 w-6 mb-6" type="checkbox" />
              </div>
            </div>

            <label className="body-variant text-gray-400 mb-4  ">Installments</label>
            <div className="flex justify-start items-center">
              <input className="focus:border-violet-500 heading-s text-gray-800 border border-gray-300 h-12 w-20 rounded-md p-4 mb-6" type="number" />
              <span className="body-variant text-gray-400 text-center mx-2 h-10">of</span>
              <input className="focus:border-violet-500 heading-s text-gray-800 border border-gray-300 h-12 w-20 rounded-md p-4 mb-6" type="number" />
            </div>

            <label className="body-variant text-gray-400 mb-4  ">Observation</label>
            <input className="focus:border-violet-500 heading-s text-gray-800 border border-gray-300 h-12 rounded-md p-4 mb-6" type="text" />
          </form>
        </article>

        <div className="h-16 bg-line bg-gradient-to-b from-transparent to-gray-200 lg:hidden" />

        <footer className="flex justify-end items-center w-full h-28 bg-white lg:mt-5 p-6 rounded-r-3xl">
          <Button textColor="text-gray-400" bgColor="bg-gray-100" name="Cancel" />
          <Button textColor="text-gray-100" bgColor="bg-violet-500" name="Save Changes" />
        </footer>
      </div>
    </div>

  )
}