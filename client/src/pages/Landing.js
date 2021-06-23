import React, { useEffect } from 'react';
import API from '../utils/API';

export default function Landing() {

    function testDB() {
        API.test().then(res => {
            console.log(res.data)
        })
    };

    useEffect(() => {
        testDB();
    }, []);

    return (
        <div>
            <h1>Welcome to TPL</h1>
            {/* <div>
                <h4>About TPL</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in tortor neque. Sed elit justo, tincidunt at scelerisque non, rhoncus eget libero. Sed laoreet, velit eget luctus molestie, nibh nisi bibendum nulla, tincidunt vulputate justo magna vel lectus. Sed neque risus, egestas vulputate consequat id, accumsan sed dui. Integer porttitor dapibus felis, sed sagittis ex tincidunt luctus. Aliquam nec maximus eros. In id porta turpis. Duis semper ligula vitae condimentum aliquam. Aliquam quis euismod tellus, vel pharetra sapien. Ut eget augue vel massa aliquet finibus ac non magna. Duis pulvinar consectetur tellus nec elementum. Ut auctor eleifend felis, et pulvinar orci suscipit at. Sed posuere ex a cursus tempus. Pellentesque commodo eros eget augue lobortis molestie. Suspendisse elit lacus, finibus ac pellentesque ac, posuere nec purus.</p>
            </div> */}
        </div>
    )
}