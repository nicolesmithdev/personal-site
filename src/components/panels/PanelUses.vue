<template>
    <div>
        <h2>Uses</h2>

        <p>A collection of tools, apps, and resources I regularly use.</p>

        <div class="row">
            <div class="col col-1third">
                <i class="fas fa-laptop fa-2x"></i>

                <h3>Hardware</h3>

                <p><strong>Laptop:</strong> 15" MacBook Pro (2016), 2.7 GHz Quad-core Intel Core i7, 16 GB RAM, 2 TB SSD</p>
            </div>

            <div class="col col-1third">
                <i class="fas fa-code fa-2x"></i>

                <h3>Development</h3>

                <p><strong>Text Editor:</strong> Visual Studio Code, Sublime Text</p>

                <p><strong>Terminal:</strong> Visual Studio Code, macOS Terminal</p>

                <p><strong>Hosting:</strong> <a href="http://www.a2hosting.com/5933.html" target="_blank">A2 Hosting</a></p>

                <p><strong>Frameworks:</strong> Vue.js, Genesis (WordPress), Vanilla HTML &amp; CSS</p>
            </div>

            <div class="col col-1third col-last">
                <i class="fas fa-paint-brush fa-2x"></i>

                <h3>Design</h3>

                <p><strong>Software:</strong> Adobe Photoshop</p>

                <p><strong>Color Scheme Designer:</strong> <a href="http://paletton.com/" target="_blank">Paletton</a> and <a href="https://www.palettable.io/" target="_blank">Palettable</a></p>

                <p><strong>Stock Photos:</strong> <a href="https://pixabay.com/" target="_blank">Pixabay</a> (free) and <a href="https://www.shutterstock.com/home" target="_blank">Shutterstock</a> (paid)</p>
            </div>
        </div> <!-- .row -->
    </div>
</template>

<style lang="scss">
#uses {
    text-align: center;

    h2 + p {
        margin-bottom: $padding*2;
    }

    strong {
        font-weight: 600;
    }

    p + h3 {
        margin-top: $padding*2;
    }

    .row {
        font-size: 16px;
        line-height: 25px;
        text-align: left;

        h3, i.fas {
            display: block;
            text-align: center;
        }

        i.fas {
            margin-bottom: $padding/2;
        }
    }
}
</style>