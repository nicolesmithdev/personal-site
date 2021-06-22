<template>
    <footer class="site-footer">
		<div class="container">
			<ul class="menu">
				<li><a href="https://twitter.com/nicolesmithdev/" target="_blank"><i class="fab fa-twitter fa-lg"></i></a></li>
				<li><a href="https://www.instagram.com/nicolesmithdev/" target="_blank"><i class="fab fa-instagram fa-lg"></i></a></li>
                <li><a href="https://github.com/nicolesmithdev/" target="_blank"><i class="fab fa-github fa-lg"></i></a></li>
				<li><a href="https://www.linkedin.com/in/nicolesmithdev/" target="_blank"><i class="fab fa-linkedin-in fa-lg"></i></a></li>
				<li><a href="mailto:nicole@nicolesmith.dev"><i class="fas fa-envelope fa-lg"></i></a></li>
			</ul>

			<p>&copy; {{ new Date().getFullYear() }} Nicole Smith</p>
		</div>
    </footer>
</template>

<style lang="scss" scoped>
.site-footer {
    background-color: $pink;
    color: $white;
    font-size: 14px;
    letter-spacing: 0.1em;
    padding: $padding*2 0;
    text-align: center;
    text-transform: uppercase;

    a {
        color: $white;
        text-decoration: none;

        &:hover {
            color: rgba(255,255,255,0.75);
        }
    }

    p:last-child {
        margin-bottom: 0;
    }

    .menu {
        margin: 0;
        padding: 0;

        li {
            display: inline-block;
            list-style: none;
            margin: 0 $padding/4;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }

            a {
                display: block;
            }

            + p {
                margin-top: $padding/2;
            }
        }
    }
}
</style>