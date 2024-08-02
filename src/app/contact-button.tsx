"use client"

import {Button} from "@/components/ui/button";

const ContactButton = () => {
    function contactClicked() {
        window.open('mailto:rokokovac98@gmail.com');
    }

    return (
        <Button onClick={contactClicked} className="mt-10 ml-4 scale-125">Contact me</Button>
    )
}

export default ContactButton;