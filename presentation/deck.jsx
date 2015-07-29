import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),
  emergency: require("./emergency.png")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            HKJS 6.0
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
             Welcome, Welcome, Welcome
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={1} fit caps textColor="secondary">
            Tonight's Agenda
          </Heading>
          <List>
            <ListItem>Housekeeping</ListItem>
            <ListItem><strong>Edwin Tao</strong>, Startup Casa + MEAN stack</ListItem>
            <ListItem>Break</ListItem>
            <ListItem>Community Announcements</ListItem>
            <ListItem><strong>Charles Oppenheimer</strong>, Twilio</ListItem>
            <ListItem><strong>Kevin Bluer</strong>, React Native (time permitting)</ListItem>
            <ListItem>Q&A</ListItem>
          </List>
        </Slide>   
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={1} fit caps textColor="secondary">
            Housekeeping
          </Heading>
          <List>
            <ListItem>Restrooms</ListItem>
            <ListItem>Drinks</ListItem>
            <ListItem>Slack (hongkongjs.slack.com)</ListItem>
            <ListItem>Upcoming Workshops (Ionic, React Native)</ListItem>
            <ListItem>hongkongjs.com?</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Heading size={1} caps fit textColor="primary">
            Edwin Tao
          </Heading>
          <Heading size={1} caps fit textColor="tertiary">
            Mongo, Express, Angular, Node
          </Heading>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Break
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Why not have a drink?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Heading size={1} caps fit textColor="primary">
            Charles Oppenheimer
          </Heading>
          <Heading size={1} caps fit textColor="tertiary">
            Twilio
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Heading size={1} caps fit textColor="primary">
            Kevin Bluer
          </Heading>
          <Heading size={1} caps fit textColor="tertiary">
            React Native
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Image src={images.emergency.replace('/','')} margin="0px auto 40px" height="600px"/>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Heading size={1} caps fit textColor="primary">
            Thank You!
          </Heading>
          <Heading size={1} caps fit textColor="tertiary">
            Next Month: JS and IoT?
          </Heading>
        </Slide>        
      </Deck>
    );
  }
}
