import { FaGithub } from "react-icons/fa";
import { LuBadgeIndianRupee } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { FaTools } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";

const FrontFooter = () => {
    return(
        <>
        <footer className="bg-[#f2f2f2] py-12 ">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-3 gap-15">
                    <div>
                        <div class="card bg-base-100 w-96 shadow-sm">
                            <div class="card-body">
                                <h2 class="card-title">About Ambar</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts there are title and actions parts</p>
                            </div>
                        </div>
                    </div>                       
                    <div>
                        <div class="card bg-base-100 w-96 shadow-sm">
                            <div class="card-body">
                                <h2 class="card-title">Resources</h2>
                                <ul>
                                    <li><a className="flex justify-start" href="#"><FaGithub className="me-2 mt-1" /> Version Update</a></li>
                                    <li><a className="flex justify-start" href="#"><LuBadgeIndianRupee className="me-2 mt-1" /> Pricing Plan</a></li>
                                    <li><a className="flex justify-start" href="#"><FaTools className="me-2 mt-1"/> Application Features</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card bg-base-100 w-96 shadow-sm">
                            <div class="card-body">
                                <h2 class="card-title">Legal</h2>
                                <ul>
                                    <li><a className="flex justify-start" href="#"><MdOutlinePrivacyTip  className="me-2 mt-1" /> Privacy Policy</a></li>
                                    <li><a className="flex justify-start" href="#"><MdOutlinePolicy className="me-2 mt-1" /> Terms of Service</a></li>
                                    <li><a className="flex justify-start" href="#"><VscFeedback className="me-2 mt-1"/> Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer> 
        <div className="bg-black border-t-orange-200 py-2">
            <div className="max-w-6xl mx-auto flex justify-between">
                <p className="text-white text-[12px]">© 2025 ChocoUI. All rights reserved.</p>
                <p className="text-white text-[12px]">Made with by the ChocoUI team</p>
            </div>
        </div>
        </>
    )
}

export default FrontFooter;