document.onreadystatechange = function () {
		const main_content = document.querySelector("body > main > main > div > article > div.entry-main-content");
    const comment_block = document.querySelector("#comment-div-block");
    main_content.insertBefore(comment_block, main_content.childNodes[1]);
	
}
