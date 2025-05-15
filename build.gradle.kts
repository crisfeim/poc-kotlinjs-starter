plugins {
    kotlin("multiplatform") version "1.9.23"
}

repositories {
    mavenCentral()
}

kotlin {
    macosX64("macos") {
        binaries {
            framework {
                baseName = "Shared"
                isStatic = false
            }
        }
    }

    js(IR) {
        browser()
	binaries.library()
compilations["main"].compileTaskProvider.configure {
            kotlinOptions {
                sourceMap = true
                moduleKind = "umd"
                metaInfo = true
            }
        }
    }

    sourceSets {
        val commonMain by getting
        val macosMain by getting
        val jsMain by getting
    }
}
