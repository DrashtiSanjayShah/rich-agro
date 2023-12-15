function showImage(category) {
    // Change background color on click
    document.getElementById('image-container').style.display = 'block';
  
    // Display corresponding image
    var imageSource = getCategoryImageSource(category);
    document.getElementById('image-placeholder').src = imageSource;
     // Display corresponding text
     var text = getCategoryText(category);
     document.getElementById('text-placeholder').innerText = text;
   
  }
  
  function getCategoryImageSource(category) {
    switch (category) {
      case 'founding':
        return 'images/about-image.webp';
      case 'core':
        return 'images/core-image.jpeg';
      case 'values':
        return 'images/values-image.png';
      case 'commitment':
        return 'images/commitment-image.jpeg';
      default:
        return 'images/default-image.jpeg';
    }
  }
  function getCategoryText(category) {
    switch (category) {
      case 'founding':
        return `Established in 1893 during the British colonial era, Richon Agro Industries Pvt Ltd. has a remarkable 129-year history, evolving through a change of ownership in 1943 and subsequent mergers in 2021 and 2023.`;
      case 'core':
        return `With a 130-year legacy, Richon Agro is renowned for cultivating top-quality coffee and tea, consistently upholding the highest standards and earning a prestigious gold rating for two decades`;
      case 'values':
        return `Driven by core values of kindness, care, and respect, Richon Agro fosters a workplace culture that values professionalism and dignity.`;
      case 'commitment':
        return `Committed to continuing its legacy, Richon Agro is dedicated to providing affordable, quality products and aims to be a trailblazing company offering healthy food products and contributing to the nation-building process`;
      default:
        return 'Richon Agro.';
    }
  }
  
  function scrollProducts(categoryId, categoryNumber) {
    const container = document.getElementById(categoryId).getElementsByClassName('product-container')[0];
    container.scrollLeft += 200; // Adjust the scroll value based on your product item width
  }

