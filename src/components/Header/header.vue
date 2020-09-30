<template>
    <div class="Header__Container md-layout">
        <div class="Header__Image md-layout-item md-size-50">
            <img
                alt="Profile picture"
                src="profile_default.png"
            />
        </div>
        <div class="Header__Info md-layout-item md-size-50">
            <div class="md-layout-item md-size-100">
                <h4>Martynas Kasparavičius</h4>
            </div>
            <div class="Header__Socials md-layout-item md-size-100">
                <div class="Header__SocialItem">
                    <a target="_blank" href="#">
                        <font-awesome-icon :icon="['fab', 'github']" /> MartynasKasp
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .Header__Container {
        height: auto;
        width: 100%;
        background-color: $colorPrimary;
        color: $colorWhite;
        padding: 16px;

        .Header__Image {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 16px;

            img {
                border-radius: 50%;
                border: 1px solid $colorWhite;
                height: 200px;
                width: 200px;
            }
        }

        .Header__Info {
            padding-left: 16px;

            h1 {
                text-align: left;
            }

            .Header__Socials {
                display: flex;

                a {
                    color: white;
                    text-decoration: none;
                    border-bottom: 1px dotted white;

                    &:hover {
                        border-bottom: none;
                    }
                }
            }
        }
    }
</style>
