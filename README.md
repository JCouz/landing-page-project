# Levi's 501 Landing Page for Go Thrift

## Description/Design Choices

**I have designed and developed a product landing page including:**
* Basic header
* Hero section
* USPs
* Full width video
* Product Slider
* Image text section with FAQs accordion
* Basic footer

I firstly spent some time researching the Levi's brand and their branding used, before deciding on a product to focus on for the project. I landed on the 501s as they seem to be a pretty identifiable product for Levi's.

I then further researched landing pages and key components of them. I'm not often involved in any design decisions in my current role, so this presented a new challenge, which I enjoyed as it allowed me to truly be creative. As I'm not used to this, I chose not to attempt to create an actual design beforehand and rather let my creativity lead the way as I approached each section. I recognise this is not ideal in the real world.

For the brand colours, I found they only really have the Levi's Red. I tried to include this without going too overboard outside of CTAs, such as highlighting parts of headings or in dividers.

For the copy, I wanted to have a playful/fun vibe throughout the page to appeal to younger audiences as I'm led to believe Levi's has an older client base typically. This way it's potentially bringing in a newer demographic of customers.

#### Header/Footer
For the header, I wanted to just keep it simple to prevent users from immediately leaving the page via a nav link here. I chose to have the Levi's logo centralised and later added some JS to make it sticky when scrolling back up the page.

The footer is just basic links/socials/copyright to round the page off better. I added a small script to ensure the copyright updates each year also.

#### Hero Section
The section I spent the most time on by far, tweaking a lot for screen sizes. I wanted to try and do something different, specifically an overlapping image. I tried a few different approaches and settled on a centralised PNG of the product.

From looking through the product on the Levi's site, I found some copy that I could use for a play on words with the image fading in. I went with that, along with a centralised PNG of the image, with more catchy copy I found on the product page for the CTA. I also added a custom cursor when hovering over the CTA in this section for a bit of fun.

Overall, I focused on capturing the attention of the user on first load with what appears to be an empty space, for the product to then fade in. I also included the product to be greyscaled until you hover on it, and for the product to be a link as well as the CTA.

#### USPs

A simple section outlining some key product details contained within their own cards, including a related icon.

The intention here was to encourage the user to scroll further. I overlapped these also into the hero to make the page appear less 'flat'.

I used JavaScript to dynamically add these into the HTML to showcase another way of doing things and to stack up the index code less with content.

#### Full Width Video

Again, intended to break up the page and make it less flat. I added a tagline to fit with the imagery. I feel this really brings the page to life a bit more.

#### Product Slider

Designed to showcase that the 501s come in a variety of styles, with a playful CTA to encourage the user to investigate the product further.

Upon hovering on each card, the product image changes to a rear view to show the style fully.

A grabber icon on hover and a progress bar signify that it is a slider, in place of arrows. I dislike arrows on sliders in general, as I find them visually cumbersome.

#### Image Text + FAQs

To round off the page and include the collapsible menu element requested, I chose to use some FAQ accordions with JavaScript. I would typically do an accordion with a details/summary in HTML and animate it with CSS for a lighter approach on the DOM.

Again, I tried to use playful wording to maintain a general fun vibe on the page.

In terms of imagery, I wanted something that subtly shows more variation in the product.

## How to Run the Project Locally

> [!IMPORTANT]
> To run this project locally, you'll need to have **Visual Studio Code** (or any other code editor) and the **Live Server** extension installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JCouz/landing-page-gt.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd landing-page-gt
   ```

3. **Open the project in Visual Studio Code.**

4. **Start Live Server:**
* Open the `index.html` file in Visual Studio Code.
* Right-click on the `index.html` file and select `Open with Live Server`.
* Your web browser should automatically open the landing page.

5. **Viewing the page**
* If your web browser does not automatically open with the page, it should be accessible at `http://127.0.0.1:5500`.
   
## Technologies Used

#### Languages: 

* HTML
* CSS
* JavaScript

#### Libraries:

* SwiperJS
