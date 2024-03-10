import Link from "next/link";
import Image from "next/image"
import CreateProject from "@/lib/createProject";

export default function CreateProject () {
    return (
        <div className="items-center justify-center w-auto">
          <div className="w-auto h-20 items-center justify-center ml-96 m-8">
            <h1 className="font-montserrat font-normal text-4xl items-center justify-center">
              Create a project listing
            </h1>
          </div>
          <div>
            <form 
            className="flex mt-0 justify-center"
            action={async (formData) => {
                "use server";
                await CreateProject(formData)
                redirect("/projects")
              }}
             >
              <div className="flex w-auto">
                <div>
                  <div className="w-96 h-min flex-shrink-0 rounded-2xl border-2 border-gray-300 bg-gray-200 m-10">
                    <Link href="#" className="items-center justify-center">
                      <Image
                        src="/img/cloud-backup-icon 1.svg"
                        width="218"
                        height="181"
                        alt="Dropko Logo"
                        className="ml-20 mt-28 flex-shrink-0 items-center justify-center"
                      />
                    </Link>
                    <div className="items-center justify-center mt-8 pb-24">
                      <h1 className="font-montserrat font-normal text-center text-[#929292]">
                        Click to upload a profile picture <br /> (500px x 500px)
                      </h1>
                      {/* Input for image upload */}
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        // onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-normal text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      name="username"
                    //   value={formData.username}
                    //   onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-normal text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="projectName"
                    >
                      Project Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="projectName"
                      type="text"
                      name="projectName"
                    //   value={formData.projectName}
                    //   onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="projectDescription"
                    >
                      Project Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"
                      id="projectDescription"
                      name="projectDescription"
                    //   value={formData.projectDescription}
                    //   onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="blockchain"
                    >
                      Blockchain
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="blockchain"
                      name="blockchain"
                    //   value={formData.blockchain}
                    //   onChange={handleInputChange}
                      required
                    >
                      <option value="hive">Hive</option>
                      <option value="ethereum">Ethereum</option>
                      <option value="bsc">Binance Smart Chain</option>
                      <option value="solana">Solana</option>
                      <option value="polygon">Polygon</option>
                      <option value="tezos">Tezos</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="price"
                    >
                      Price
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="price"
                      type="number"
                      name="price"
                    //   value={formData.price}
                    //   onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="projectDate"
                    >
                      Project Date
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="projectDate"
                      type="date"
                      name="projectDate"
                    //   value={formData.projectDate}
                    //   onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="totalSupply"
                    >
                      Total Supply
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="totalSupply"
                      type="number"
                      name="totalSupply"
                    //   value={formData.totalSupply}
                    //   onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="hasWhitelist"
                    >
                      Has Whitelist
                    </label>
                    <input
                      className="ml-2 leading-tight"
                      type="checkbox"
                      id="hasWhitelist"
                      name="hasWhitelist"
                    //   checked={formData.hasWhitelist}
                    //   onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="priceType"
                    >
                      Price Type
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="priceType"
                      name="priceType"
                    //   value={formData.priceType}
                    //   onChange={handleInputChange}
                      required
                    >
                      <option value="fixed">Fixed</option>
                      <option value="variable">Variable</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="airdrop"
                    >
                      Airdrop
                    </label>
                    <input
                      className="ml-2 leading-tight"
                      type="checkbox"
                      id="airdrop"
                      name="airdrop"
                    //   checked={formData.airdrop}
                    //   onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="howToGetWhitelisted"
                    >
                      How to Get Whitelisted
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"
                      id="howToGetWhitelisted"
                      name="howToGetWhitelisted"
                    //   value={formData.howToGetWhitelisted}
                    //   onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold text-[#1E1E1E] mb-2 font-montserrat"
                      htmlFor="creator"
                    >
                      Creator
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="creator"
                      type="text"
                      name="creator"
                    //   value={formData.creator}
                    //   onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <Footer /> */}
        </div>
      );
}