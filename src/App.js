import React from "react";
import Badge from "./components/Badges/Badges";
import BadgeColor from "./components/Badges/BadgeColor";
import Banner from "./components/Banners/Banner";
import BannerWarning from "./components/Banners/BannerWarning";
import Card from "./components/Cards/Card";
import Testimonial from "./components/Testimonials/Testimonial"
import Info from "./components/Testimonials/Info";
import Name from "./components/Testimonials/Name";

export default function App(){

    return (
        <>
        <BadgeColor>
            <Badge>Badge One</Badge>
            <Badge>Badge Two</Badge>
            <Badge>Badge Three</Badge>
        </BadgeColor>

        <BannerWarning>
            <Banner></Banner>
            <Banner></Banner>
            <Banner></Banner>
            <Banner></Banner>
        </BannerWarning>

        <Card>
            <h3>Easy Deployment</h3>
            <p>Ac tincidunt sapien vehicula erat auctor pellentesque 
                rhoncus. Et magna sit morbi lobortis.</p>
        </Card>
        <Card>
            <h3>Quick Fix</h3>
            <p>Ac tincidunt sapien vehicula erat auctor pellentesque 
                rhoncus. Et magna sit morbi lobortis.</p>
        </Card>
        <Card>
            <h3>Update</h3>
            <p>Ac tincidunt sapien vehicula erat auctor pellentesque 
                rhoncus. Et magna sit morbi lobortis.</p>
        </Card>

        <Testimonial>
            <Info>
            Ac tincidunt sapien vehicula erat auctor pellentesque 
                rhoncus. Et magna sit morbi lobortis.
            </Info>
            <Name>
                Miguel
            </Name>
        </Testimonial>
        <Testimonial>
            <Info>
            Ac tincidunt sapien vehicula erat auctor pellentesque 
                rhoncus. Et magna sit morbi lobortis.
            </Info>
            <Name>
                Miguel
            </Name>
        </Testimonial>
        <Testimonial>
            <Info>
            Ac tincidunt sapien vehicula erat auctor pellentesque 
                rhoncus. Et magna sit morbi lobortis.
            </Info>
            <Name>
                Miguel
            </Name>
        </Testimonial>
        </>
    )
}