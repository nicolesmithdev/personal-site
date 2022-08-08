<template>
    <div>
        <h2>Featured Projects</h2>

        <div class="row">
            <div class="col col-1third">
                <a href="https://eattherainbow.recipes/" class="img">
                    <img
                        src="../../assets/images/eat-the-rainbow.png"
                        alt="Eat The Rainbow"
                        width="310"
                        height="205"
                    />
                </a>
                <h3>Recipes App</h3>
                <p>
                    MERN (MongoDB, Express, React, Node) web app featuring a
                    collection of recipes based on a nutrition program, allowing
                    users to filter recipes by category, container color,
                    dietary needs, and/or source.
                </p>

                <div class="btn-group">
                    <a href="https://eattherainbow.recipes/"
                        ><i class="fa fa-link"></i> Visit</a
                    >
                    <a href="https://github.com/nicolesmithdev/eat-the-rainbow/"
                        ><i class="fa fa-github"></i> View on GitHub</a
                    >
                </div>
            </div>

            <div class="col col-1third">
                <a href="https://www.bullybreedersassociation.com/" class="img">
                    <img
                        src="../../assets/images/bully-breeders-association.png"
                        alt="Bully Breeders Association"
                        width="310"
                        height="205"
                    />
                </a>
                <h3>Dog Registry</h3>
                <p>
                    Built in WordPress with WooCommerce and Gravity Forms,
                    custom programmed plugins dynamically create PDF
                    registration certificates at the click of a button.
                </p>

                <div class="btn-group">
                    <a href="https://www.bullybreedersassociation.com/"
                        ><i class="fa fa-link"></i> Visit</a
                    >
                </div>
            </div>

            <div class="col col-1third col-last">
                <a href="http://mightymichiganbulldogges.com/" class="img">
                    <img
                        src="../../assets/images/mighty-michigan-bulldogges.png"
                        alt="Mighty Michigan Bulldogges"
                        width="310"
                        height="205"
                    />
                </a>
                <h3>Dog Breeder</h3>
                <p>
                    Custom designed WordPress-powered site built on the Genesis
                    framework.
                </p>

                <div class="btn-group">
                    <a href="http://mightymichiganbulldogges.com/"
                        ><i class="fa fa-link"></i> Visit</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#projects {
    text-align: center;

    h2 {
        margin-bottom: $padding * 2;
    }

    h3 {
        margin-top: $padding;
    }

    .row {
        align-items: stretch;
        display: flex;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
    }
    .col {
        align-self: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &:not(:last-child) {
            margin-bottom: $padding * 2;
        }
        @include respond-to('large') {
            &:not(:last-child) {
                margin-bottom: 0;
            }
        }
        > a.img {
            display: block;
        }
        a.img,
        h3 {
            flex-grow: 0;
            flex-shrink: 0;
        }
        h3 {
            margin-bottom: 0;
        }
        p {
            flex-grow: 1;
            flex-shrink: 1;
        }
    }
    .btn-group {
        display: flex;
        grid-gap: 2px;
        a {
            background-color: $light-gray;
            color: $default-color;
            display: block;
            padding: $padding/4;
            text-decoration: none;
            width: 100%;
            &:hover {
                background-color: $pink;
                color: $white;
            }
        }
    }
}
</style>
