const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

const displayPhotoGrid = () => {
    const photoGrid = document.getElementById("photo-grid-container");
    photoGrid.innerHTML = "<h1>Photo grid here</h1>";
};

displayPhotoGrid();
