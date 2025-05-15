plugins {
    kotlin("multiplatform") version "1.9.23"
}

kotlin {
    macosX64("macos") {
        binaries {
            executable() 
        }
    }

    js(IR) {
        browser() 
    }    

    sourceSets {
        val commonMain by getting
        val jsMain by getting
        val macosMain by getting
    }
}
