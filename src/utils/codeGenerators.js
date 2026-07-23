// Generates structured Kotlin code representations with syntax tokens for all portfolio files

export function getKotlinCodeForFile(fileId, data) {
  switch (fileId) {
    case "landing":
      return generateLandingCode();
    case "profile-image":
      return generateProfileXmlCode();
    case "about-me":
      return generateAboutMeCode();
    case "exp-susamp":
      return generateExpSusampCode();
    case "exp-leons":
      return generateExpLeonsCode();

    // AI & ML
    case "aiml-img2img":
    case "proj-ai-img2img":
      return generateAiImageGenCode();
    case "aiml-calorie":
    case "proj-ai-calorie":
      return generateAiCalorieCode();
    case "aiml-misc":
      return generateAiMiscCode();

    // Skills
    case "skills-programming":
      return generateSkillsCode("ProgrammingLanguages", ["Kotlin", "Java", "Python", "React Native"]);
    case "skills-android":
      return generateSkillsCode("AndroidFrameworks", ["Jetpack Compose", "ViewModel", "LiveData", "Room DB", "Coroutines & Flow", "CameraX"]);
    case "skills-networking":
      return generateSkillsCode("NetworkingProtocols", ["MQTT Telemetry (QoS 1)", "WebSocket", "TCP/IP", "HTTP/HTTPS", "USB Serial Host (FTDI)"]);
    case "skills-databases":
      return generateSkillsCode("Databases", ["SQLite", "Room Database (Offline Sync Buffer)", "Encrypted Storage"]);
    case "skills-tools":
      return generateSkillsCode("ToolsAndConcepts", ["REST API Integration", "OTA Firmware Updates", "IoT Hardware Systems", "AdMob Monetization", "Git"]);

    // Key Achievements
    case "achieve-iot":
      return generateAchievementCode("IotSolutionsAchievement", "Led 3 IoT-Based Solutions (+20% Client Satisfaction)", "Spearheaded 3 IoT commercial equipment apps (Dispenser ERP, OTA Flasher, Glucometer SDK).");
    case "achieve-performance":
      return generateAchievementCode("PerformanceOptimizationAchievement", "-30% Processing Time Reduction", "Optimized Kotlin Coroutines dispatchers and SQLite indexing, reducing hardware packet parsing latency.");
    case "achieve-library":
      return generateAchievementCode("ReusableKotlinLibraryAchievement", "Reusable Kotlin Enterprise Library", "Developed a modular hardware communication library adopted across 2 enterprise Android projects.");
    case "achieve-hardware":
      return generateAchievementCode("HardwareCommunicationAchievement", "Enhanced Hardware Communication Reliability", "Enhanced hardware communication reliability over volatile cellular MQTT networks & USB OTG FTDI drivers.");

    // Education
    case "edu-gh-patel":
      return generateEducationCode("GHPatelCollege", "G H Patel College of Engineering and Technology", "B.E in Computer Engineering", "08/2020 – 04/2024", "Anand, Gujarat, India");
    case "edu-shiksha-niketan":
      return generateEducationCode("ShikshaNiketanSchool", "Shiksha Niketan Sr. Sec. School", "Higher Secondary Certificate (Science)", "04/2019 – 04/2020", "Jammu, India");

    // Projects
    case "proj-dispenser":
      return generateProjectCode("dispenser");
    case "proj-ota":
      return generateProjectCode("ota");
    case "proj-glucometer":
      return generateProjectCode("glucometer");
    case "proj-gpsmap":
      return generateProjectCode("gpsmap");
    case "proj-surveycam":
      return generateProjectCode("surveycam");
    case "proj-reverseaudio":
      return generateProjectCode("reverseaudio");

    case "contact":
      return generateContactCode();
    default:
      return generateAboutMeCode();
  }
}

function generateProfileXmlCode() {
  return [
    { line: 1, text: '<?xml version="1.0" encoding="utf-8"?>', tokens: [{ t: 'keyword', v: '<?xml version="1.0" encoding="utf-8"?>' }] },
    { line: 2, text: '<com.google.android.material.imageview.ShapeableImageView', tokens: [{ t: 'keyword', v: '<com.google.android.material.imageview.ShapeableImageView' }] },
    { line: 3, text: '    xmlns:android="http://schemas.android.com/apk/res/android"', tokens: [{ t: 'prop', v: '    xmlns:android' }, { t: 'text', v: '=' }, { t: 'string', v: '"http://schemas.android.com/apk/res/android"' }] },
    { line: 4, text: '    xmlns:app="http://schemas.android.com/apk/res-auto"', tokens: [{ t: 'prop', v: '    xmlns:app' }, { t: 'text', v: '=' }, { t: 'string', v: '"http://schemas.android.com/apk/res-auto"' }] },
    { line: 5, text: '    android:id="@+id/imgProfileAvatar"', tokens: [{ t: 'prop', v: '    android:id' }, { t: 'text', v: '=' }, { t: 'string', v: '"@+id/imgProfileAvatar"' }] },
    { line: 6, text: '    android:layout_width="200dp"', tokens: [{ t: 'prop', v: '    android:layout_width' }, { t: 'text', v: '=' }, { t: 'string', v: '"200dp"' }] },
    { line: 7, text: '    android:layout_height="200dp"', tokens: [{ t: 'prop', v: '    android:layout_height' }, { t: 'text', v: '=' }, { t: 'string', v: '"200dp"' }] },
    { line: 8, text: '    android:src="@drawable/shubham_profile_photo"', tokens: [{ t: 'prop', v: '    android:src' }, { t: 'text', v: '=' }, { t: 'string', v: '"@drawable/shubham_profile_photo"' }] },
    { line: 9, text: '    android:scaleType="centerCrop"', tokens: [{ t: 'prop', v: '    android:scaleType' }, { t: 'text', v: '=' }, { t: 'string', v: '"centerCrop"' }] },
    { line: 10, text: '    app:shapeAppearanceOverlay="@style/RoundedCorner24dp"', tokens: [{ t: 'prop', v: '    app:shapeAppearanceOverlay' }, { t: 'text', v: '=' }, { t: 'string', v: '"@style/RoundedCorner24dp"' }] },
    { line: 11, text: '    app:strokeColor="#3DDC84"', tokens: [{ t: 'prop', v: '    app:strokeColor' }, { t: 'text', v: '=' }, { t: 'string', v: '"#3DDC84"' }] },
    { line: 12, text: '    app:strokeWidth="3dp"', tokens: [{ t: 'prop', v: '    app:strokeWidth' }, { t: 'text', v: '=' }, { t: 'string', v: '"3dp"' }] },
    { line: 13, text: '    app:elevation="12dp" />', tokens: [{ t: 'keyword', v: '    app:elevation="12dp" />' }] },
  ];
}

function generateLandingCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio' }] },
    { line: 2, text: '' },
    { line: 3, text: 'import com.android.developer.annotation.PortfolioMain', tokens: [{ t: 'keyword', v: 'import' }, { t: 'text', v: ' com.android.developer.annotation.' }, { t: 'type', v: 'PortfolioMain' }] },
    { line: 4, text: '' },
    { line: 5, text: '@PortfolioMain', tokens: [{ t: 'annotation', v: '@PortfolioMain' }] },
    { line: 6, text: 'object Portfolio {', tokens: [{ t: 'keyword', v: 'object' }, { t: 'type', v: ' Portfolio' }, { t: 'text', v: ' {' }] },
    { line: 7, text: '    const val DEVELOPER_NAME = "Shubham Sharma"', tokens: [{ t: 'keyword', v: '    const val' }, { t: 'prop', v: ' DEVELOPER_NAME' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Shubham Sharma"' }] },
    { line: 8, text: '    const val TITLE = "Android Developer, AI/ML Developer & IoT Specialist"', tokens: [{ t: 'keyword', v: '    const val' }, { t: 'prop', v: ' TITLE' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Android Developer, AI/ML Developer & IoT Specialist"' }] },
    { line: 9, text: '    const val LOCATION = "Surat, Gujarat, India"', tokens: [{ t: 'keyword', v: '    const val' }, { t: 'prop', v: ' LOCATION' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Surat, Gujarat, India"' }] },
    { line: 10, text: '    const val EXPERIENCE = "2+ Years"', tokens: [{ t: 'keyword', v: '    const val' }, { t: 'prop', v: ' EXPERIENCE' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"2+ Years"' }] },
    { line: 11, text: '}' }
  ];
}

function generateAboutMeCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.developer', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.developer' }] },
    { line: 2, text: '' },
    { line: 3, text: 'import com.shubham.portfolio.base.AndroidDeveloper', tokens: [{ t: 'keyword', v: 'import' }, { t: 'text', v: ' com.shubham.portfolio.base.' }, { t: 'type', v: 'AndroidDeveloper' }] },
    { line: 4, text: '' },
    { line: 5, text: 'class ShubhamSharma : AndroidDeveloper() {', tokens: [{ t: 'keyword', v: 'class' }, { t: 'type', v: ' ShubhamSharma' }, { t: 'text', v: ' : ' }, { t: 'type', v: 'AndroidDeveloper' }, { t: 'text', v: '() {' }] },
    { line: 6, text: '    val name = "Shubham Sharma"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' name' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Shubham Sharma"' }] },
    { line: 7, text: '    val title = "Android Developer, AI/ML Developer & IoT Specialist"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' title' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Android Developer, AI/ML Developer & IoT Specialist"' }] },
    { line: 8, text: '    val location = "Surat, Gujarat, India"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' location' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Surat, Gujarat, India"' }] },
    { line: 9, text: '    val experience = "2+ Years Exp"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' experience' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"2+ Years Exp"' }] },
    { line: 10, text: '}' }
  ];
}

function generateEducationCode(className, institution, degree, period, location) {
  return [
    { line: 1, text: 'package com.shubham.portfolio.education', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.education' }] },
    { line: 2, text: '' },
    { line: 3, text: `class ${className} {`, tokens: [{ t: 'keyword', v: 'class' }, { t: 'type', v: ` ${className}` }, { t: 'text', v: ' {' }] },
    { line: 4, text: `    val institution = "${institution}"`, tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' institution' }, { t: 'text', v: ' = ' }, { t: 'string', v: `"${institution}"` }] },
    { line: 5, text: `    val degree = "${degree}"`, tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' degree' }, { t: 'text', v: ' = ' }, { t: 'string', v: `"${degree}"` }] },
    { line: 6, text: `    val period = "${period}"`, tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' period' }, { t: 'text', v: ' = ' }, { t: 'string', v: `"${period}"` }] },
    { line: 7, text: `    val location = "${location}"`, tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' location' }, { t: 'text', v: ' = ' }, { t: 'string', v: `"${location}"` }] },
    { line: 8, text: '}' }
  ];
}

function generateAchievementCode(className, title, desc) {
  return [
    { line: 1, text: 'package com.shubham.portfolio.achievements', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.achievements' }] },
    { line: 2, text: '' },
    { line: 3, text: `object ${className} {`, tokens: [{ t: 'keyword', v: 'object' }, { t: 'type', v: ` ${className}` }, { t: 'text', v: ' {' }] },
    { line: 4, text: `    const val TITLE = "${title}"`, tokens: [{ t: 'keyword', v: '    const val' }, { t: 'prop', v: ' TITLE' }, { t: 'text', v: ' = ' }, { t: 'string', v: `"${title}"` }] },
    { line: 5, text: `    const val IMPACT_DESCRIPTION = "${desc}"`, tokens: [{ t: 'keyword', v: '    const val' }, { t: 'prop', v: ' IMPACT_DESCRIPTION' }, { t: 'text', v: ' = ' }, { t: 'string', v: `"${desc}"` }] },
    { line: 6, text: '}' }
  ];
}

function generateSkillsCode(className, list) {
  return [
    { line: 1, text: 'package com.shubham.portfolio.skills', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.skills' }] },
    { line: 2, text: '' },
    { line: 3, text: `object ${className} {`, tokens: [{ t: 'keyword', v: 'object' }, { t: 'type', v: ` ${className}` }, { t: 'text', v: ' {' }] },
    { line: 4, text: `    val list = listOf(`, tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' list' }, { t: 'text', v: ' = ' }, { t: 'type', v: 'listOf' }, { t: 'text', v: '(' }] },
    ...list.map((item, idx) => ({
      line: 5 + idx,
      text: `        "${item}"${idx < list.length - 1 ? ',' : ''}`,
      tokens: [{ t: 'string', v: `        "${item}"` }, { t: 'text', v: idx < list.length - 1 ? ',' : '' }]
    })),
    { line: 5 + list.length, text: '    )' },
    { line: 6 + list.length, text: '}' }
  ];
}

function generateAiImageGenCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.ai_ml', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.ai_ml' }] },
    { line: 2, text: '' },
    { line: 3, text: 'class AiImageGenApp {', tokens: [{ t: 'keyword', v: 'class' }, { t: 'type', v: ' AiImageGenApp' }, { t: 'text', v: ' {' }] },
    { line: 4, text: '    val cameraPipeline = "CameraX 60FPS Raw Bitmap Capture"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' cameraPipeline' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"CameraX 60FPS Raw Bitmap Capture"' }] },
    { line: 5, text: '    val aiModels = listOf("Gemini API", "Nvidia AI Generative API")', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' aiModels' }, { t: 'text', v: ' = ' }, { t: 'type', v: 'listOf' }, { t: 'text', v: '(' }, { t: 'string', v: '"Gemini API", "Nvidia AI Generative API"' }, { t: 'text', v: ')' }] },
    { line: 6, text: '}' }
  ];
}

function generateAiCalorieCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.ai_ml', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.ai_ml' }] },
    { line: 2, text: '' },
    { line: 3, text: 'class AiCalorieCounter {', tokens: [{ t: 'keyword', v: 'class' }, { t: 'type', v: ' AiCalorieCounter' }, { t: 'text', v: ' {' }] },
    { line: 4, text: '    val visionEngine = "Google ML Kit Object Detection (On-Device)"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' visionEngine' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Google ML Kit Object Detection (On-Device)"' }] },
    { line: 5, text: '    val macroScanner = "Real-time Bounding Box Calorie & Protein Lookup"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' macroScanner' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Real-time Bounding Box Calorie & Protein Lookup"' }] },
    { line: 6, text: '}' }
  ];
}

function generateAiMiscCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.ai_ml', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.ai_ml' }] },
    { line: 2, text: '' },
    { line: 3, text: 'object AiIntegratedApps {', tokens: [{ t: 'keyword', v: 'object' }, { t: 'type', v: ' AiIntegratedApps' }, { t: 'text', v: ' {' }] },
    { line: 4, text: '    val hybridArchitecture = "Fast On-Device ML Kit + Cloud AI Deep Inference"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' hybridArchitecture' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Fast On-Device ML Kit + Cloud AI Deep Inference"' }] },
    { line: 5, text: '}' }
  ];
}

function generateExpSusampCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.experience', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.experience' }] },
    { line: 2, text: 'class SusampInfotechExperience {', tokens: [{ t: 'keyword', v: 'class' }, { t: 'type', v: ' SusampInfotechExperience' }, { t: 'text', v: ' {' }] },
    { line: 3, text: '    val company = "Susamp Infotech"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' company' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Susamp Infotech"' }] },
    { line: 4, text: '    val role = "Android Developer"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' role' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Android Developer"' }] },
    { line: 5, text: '    val location = "Surat, Gujarat, India"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' location' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Surat, Gujarat, India"' }] },
    { line: 6, text: '}' }
  ];
}

function generateExpLeonsCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.experience', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.experience' }] },
    { line: 2, text: 'class LeonsIntegrationsExperience {', tokens: [{ t: 'keyword', v: 'class' }, { t: 'type', v: ' LeonsIntegrationsExperience' }, { t: 'text', v: ' {' }] },
    { line: 3, text: '    val company = "LeonsIntegrations Pvt. Ltd."', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' company' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"LeonsIntegrations Pvt. Ltd."' }] },
    { line: 4, text: '    val role = "Software Developer (Android & IoT Systems)"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' role' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Software Developer (Android & IoT Systems)"' }] },
    { line: 5, text: '    val location = "Vadodara, Gujarat, India"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' location' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Vadodara, Gujarat, India"' }] },
    { line: 6, text: '}' }
  ];
}

function generateProjectCode(projId) {
  return [
    { line: 1, text: `package com.shubham.portfolio.projects.${projId}`, tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ` com.shubham.portfolio.projects.${projId}` }] },
    { line: 2, text: `class ${projId.toUpperCase()}App {`, tokens: [{ t: 'keyword', v: 'class' }, { t: 'type', v: ` ${projId.toUpperCase()}App` }, { t: 'text', v: ' {' }] },
    { line: 3, text: '}' }
  ];
}

function generateContactCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.contact', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.contact' }] },
    { line: 2, text: 'object Contact {', tokens: [{ t: 'keyword', v: 'object' }, { t: 'type', v: ' Contact' }, { t: 'text', v: ' {' }] },
    { line: 3, text: '    const val PHONE = "+91 7889843353"', tokens: [{ t: 'keyword', v: '    const val' }, { t: 'prop', v: ' PHONE' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"+91 7889843353"' }] },
    { line: 4, text: '    const val WHATSAPP = "https://wa.me/917889843353"', tokens: [{ t: 'keyword', v: '    const val' }, { t: 'prop', v: ' WHATSAPP' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"https://wa.me/917889843353"' }] },
    { line: 5, text: '}' }
  ];
}
