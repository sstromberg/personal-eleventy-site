export default function(eleventyConfig) {
	// Date formatting
	eleventyConfig.addFilter("readableDate", (dateObj) => {
		return dateObj.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		});
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return dateObj.toISOString();
	});

	// Array utilities
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}
		return array.slice(0, n);
	});

	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// String utilities
	eleventyConfig.addFilter("slugify", (str) => {
		return str.toLowerCase()
			.replace(/[^\w\s-]/g, '')
			.replace(/[\s_-]+/g, '-')
			.replace(/^-+|-+$/g, '');
	});
}
