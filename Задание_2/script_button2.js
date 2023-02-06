const btn = document.querySelector("button");

        btn.addEventListener("click", () => {
            let clientWidth = document.documentElement.clientWidth;
            let clientHeight = document.documentElement.clientHeight;
            alert(`Размеры экрана:\nШирина = ${clientWidth} Высота = ${clientHeight}`);
        });