import React from 'react';

const LeftSideFilter = () => {
	return(
			<div id="sidebar">
<ul data-accordion class="bx--accordion">
    <li data-accordion-item class="bx--accordion__item">
    <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane1">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
      <div class="bx--accordion__title">Category <span class="clear">Clear</span></div>
      </button>
    <div id="pane1" class="bx--accordion__content">
      <ul data-accordion class="categories">
        <li>Footwear<span class="count">123K</span>
          <ul>
            <li class="subcat"><input type="checkbox" id="all"><label for="all">All Footwear</label><span class="count">123K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="low"><label for="low">Low-Top Sneakers</label><span class="count">97K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="high"><label for="high">High-Top Sneakers</label><span class="count">93K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="boots"><label for="boots">Boots</label><span class="count">31K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="casual"><label for="casual">Casual Leather Shoes</label><span class="count">23K</span></input>
              <li class="subcat"><input type="checkbox" id="formal"><label for="formal">Formal Shoes</label><span class="count">18K</span></input>
                <li class="subcat"><input type="checkbox" id="sand"><label for="sand">Sandals</label><span class="count">2K</span></input>
                  <li class="subcat"><input type="checkbox" id="slip"><label for="slip">Slip Ons</label><span class="count">456</span></input>
                  </li>
          </ul>
          </li>
          <li>Tops<span class="count">123K</span></li>
          <li>Bottoms<span class="count">123K</span></li>
          <li>Outerwear<span class="count">123K</span></li>
          <li>Tailoring<span class="count">123K</span></li>
          <li>Accessories<span class="count">13K</span></li>
      </ul>
    </div>
    </li>
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane1">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Size</div>
      </button>
      <div id="pane1t5" class="bx--accordion__content">
        <div class="sizes">
          <div class="grid-container">
            <div class="item1">
              <div id="ck-button">
                <label>
      <input type="checkbox" value="1"><span>XXS <span class="eu">40</span></span>

   </label>
              </div>
            </div>
            <div class="item2">
              <div id="ck-button">
                <label>
      <input type="checkbox" value="1"><span>XS <span class="eu">42</span></span>
   </label>
              </div>
            </div>
            
             <div class="item3">
              <div id="ck-button">
                <label>
      <input type="checkbox" value="1"><span>S<span class="eu">44-46</span></span>
                  
   </label>
              </div>
            </div>
            
             <div class="item4">
              <div id="ck-button">
                <label>
      <input type="checkbox" value="1"><span>M <span class="eu">48-50</span></span>
                 
   </label>
              </div>
            </div>
            
             <div class="item5">
              <div id="ck-button">
                <label>
      <input type="checkbox" value="1"><span>L <span class="eu">52-54</span></span>

   </label>
              </div>
            </div>
            
            <div class="item6">
              <div id="ck-button">
                <label>
      <input type="checkbox" value="1"><span>XL <span class="eu">56</span></span>

   </label>
              </div>
            </div>
            
            <div class="item7">
              <div id="ck-button">
                <label>
      <input type="checkbox" value="1"><span>XXL <span class="eu">58</span></span>

   </label>
              </div>
            </div>
        </div>
      </div>
    </li>
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane2">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Designer</div>
      </button>
      <div id="pane2" class="bx--accordion__content">
        
        <input class="dsearch" type="text" placeholder="Search Designers" name="search">
        
        <ul class="designers">
            <li class="subcat"><input type="checkbox" id="sup"><label for="sup">Supreme</label><span class="count">123K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="bape"><label for="bape">Bape</label><span class="count">97K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="gucci"><label for="gucci">Gucci</label><span class="count">93K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="bal"><label for="bal">Balenciaga</label><span class="count">31K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="prada"><label for="prada">Prada</label><span class="count">23K</span></input></li>
            <li class="subcat"><input type="checkbox" id="formal"><label for="formal">Formal Shoes</label><span class="count">18K</span></input></li>
          </ul>
      </div>
    </li>
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane3">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Price</div>
      </button>
      <div id="pane3" class="bx--accordion__content">

        <input class="pricein" type="text" placeholder="$ min" name="search">
        <input class="pricein" type="text" placeholder="$ max" name="search">
        
        <ul class="designers">
          
            <li class="subcat"><input type="checkbox" id="50"><label for="50">Under $50</label><span class="count">97K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="100"><label for="100">Under $100</label><span class="count">93K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="250"><label for="250">Under $250</label><span class="count">31K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="500"><label for="500">Under $500</label><span class="count">23K</span></input></li>
            <li class="subcat"><input type="checkbox" id="1000"><label for="1000">Under $1,000</label><span class="count">18K</span></input></li>
<li class="subcat"><input type="checkbox" id="5000"><label for="5000">Under $5,000</label><span class="count">18K</span></input></li>
<li class="subcat"><input type="checkbox" id="5001"><label for="5001">$5,000 +</label><span class="count">18K</span></input></li>
          </ul>
      </div>
    </li>
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane4">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Condition</div>
      </button>
      <div id="pane4" class="bx--accordion__content">
          <ul class="designers">
          
            <li class="subcat"><input type="checkbox" id="new"><label for="new">New/Never Worn</label><span class="count">97K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="gent"><label for="gent">Gently Used</label><span class="count">93K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="used"><label for="used">Used</label><span class="count">31K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="very"><label for="very">Very Worn</label><span class="count">23K</span></input></li>
            
          </ul>
      </div>
    </li>
   
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane4">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Seller Location</div>
      </button>
      <div id="pane4" class="bx--accordion__content">
       <ul class="designers">
          
            <li class="subcat"><input type="checkbox" id="us"><label for="us">United States</label><span class="count">97K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="uk"><label for="uk">United Kingdom</label><span class="count">93K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="eu"><label for="eu">Europe</label><span class="count">31K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="asia"><label for="asia">Asia</label><span class="count">23K</span></input></li>
<li class="subcat"><input type="checkbox" id="anz"><label for="anz">Austraila/NZ</label><span class="count">23K</span></input></li>
            <li class="subcat"><input type="checkbox" id="can"><label for="can">Canada</label><span class="count">23K</span></input></li>
<li class="subcat"><input type="checkbox" id="oth"><label for="oth">Other</label><span class="count">23K</span></input></li>
          </ul>
      </div>
    </li>
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane3">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Market</div>
      </button>
      <div id="pane3" class="bx--accordion__content">
        <ul class="designers">
          
            <li class="subcat"><input type="checkbox" id="grails"><label for="grails">Grails</label><span class="count">97K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="hype"><label for="hype">Hype</label><span class="count">93K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="core"><label for="core">Core</label><span class="count">31K</span></input>
            </li>
            <li class="subcat"><input type="checkbox" id="sort"><label for="sort">Sortorial</label><span class="count">23K</span></input></li>
          </ul>
      </div>
    </li>
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane4">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Show Only</div>
      </button>
      <div id="pane4" class="bx--accordion__content">
        <ul class="designers">
            <li class="subcat"><input type="checkbox" id="staff"><label for="staff">Staff Picks</label><span class="count">97K</span></input>
            </li>
          </ul>
      </div>
    </li>
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane4">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">My Saved Filters</div>
      </button>
      <div id="pane4" class="bx--accordion__content">
        <p>You have no saved filters.</p>
      </div>
    </li>
</ul>
<button class="save">Save Selections</button>
<div class="protect">
  <svg height="20px" width="18px" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9167 3.04076L8.7496 0.590631L0.583334 3.04051V12.0834C0.583334 14.8522 4.78148 18.1576 8.74998 19.409C12.7194 18.1564 16.9167 14.8521 16.9167 12.0833V3.04076ZM17.2025 2.51749C17.3792 2.57081 17.5 2.73249 17.5 2.91667V12.0833C17.5 15.7683 11.8817 19.045 8.87332 19.9817C8.83332 19.9942 8.79165 20 8.75 20C8.70836 20 8.66668 19.9942 8.62668 19.9817C5.61832 19.0459 0 15.7684 0 12.0834V2.91667C0 2.73249 0.12082 2.56999 0.29668 2.51749L8.63 0.0174902C8.70836 -0.00583008 8.79086 -0.00583008 8.86918 0.0174902L17.2025 2.51749Z" fill="black"></path><path d="M8.98107 13.1709C10.0614 13.1709 11.078 12.8351 11.8503 12.2247V9.41561H8.89317V10.4387H10.5986V11.6014L10.5728 11.6185C10.1155 11.921 9.56389 12.0812 8.98075 12.0812C7.73135 12.0812 6.75265 11.0872 6.75265 9.81922C6.75265 8.60872 7.75237 7.62345 8.98075 7.62345C9.69224 7.62345 10.3384 7.84125 10.8053 8.23613L11.5882 7.37204C10.9127 6.78004 10.0126 6.46756 8.98075 6.46756C7.04693 6.46724 5.47331 7.97083 5.47331 9.81858C5.47331 11.6673 7.04693 13.1709 8.98107 13.1709Z" fill="black"></path></svg>
  <div class="copy">
  <p><a href="">Buyer Protection Guarantee →</a></p>
  <p>Learn how we protect your purchases on Grailed.</p>
  </div>
</div>
</div>
)
}
export default LeftSideFilter