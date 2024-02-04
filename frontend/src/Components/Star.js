function Stars(props) {
    const fullStars = Math.floor(props.len);
    const halfStar = props.len % 1 !== 0;

    const stars = Array.from({ length: fullStars }).map((_, index) => (
        <svg key={`full-${index}`} className="block h-5 w-5" fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
    ));

    if (halfStar) {
        stars.push(
        <svg key="half" className="block h-5 w-5" fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={{overflow: 'hidden'}}>
            <defs>
            <clipPath id="half-star-clip">
                <rect width="10" height="20"/>
            </clipPath>
            </defs>
            <path clipPath="url(#half-star-clip)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
        );
    }

    return (
        <div className="flex">
        {stars}
        </div>
    );
};

export default Stars;
  