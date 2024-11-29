export default function UserFooter() {
    return (
        <>
            <footer>
                <div className="flex justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm font-medium text-gray">
                    <p className="mx-2">
                        &copy; 2024 TONE FORGE GUITARS. All rights reserved.
                    </p>
                    <p className="mx-2 text-base_primary">
                        support@toneforge.com
                    </p>
                    <img className="ml-2 mr-1 h-5 w-5" src="/images/fb_social.png" alt="Facebook" />
                    <img className="ml-1 mr-1 h-5 w-5" src="/images/ig_social.png" alt="Instagram" />
                    <img className="ml-1 mr-1 h-5 w-5" src="/images/yt_social.png" alt="YouTube" />
                    <img className="ml-1 mr-2 h-5 w-5" src="/images/tw_social.png" alt="Twitter" />
                </div>
            </footer>
        </>
    );
}