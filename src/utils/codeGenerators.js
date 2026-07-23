// Generates structured Kotlin code representations with syntax tokens for all portfolio files

export function getKotlinCodeForFile(fileId, data) {
  switch (fileId) {
    case "landing":
      return generateLandingCode();
    case "about-me":
      return generateAboutMeCode();
    case "exp-susamp":
      return generateExpSusampCode();
    case "exp-leons":
      return generateExpLeonsCode();
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
    case "aiml-img2img":
      return generateProjectCode("ai_img2img");
    case "aiml-calorie":
      return generateProjectCode("ai_calorie");
    case "aiml-misc":
      return generateProjectCode("ai_misc");
    case "tech-stack":
      return generateTechStackCode();
    case "achievements":
      return generateAchievementsCode();
    case "education":
      return generateEducationCode();
    case "contact":
      return generateContactCode();
    default:
      return generateAboutMeCode();
  }
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
    { line: 1, text: 'package com.shubham.portfolio.about', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.about' }] },
    { line: 2, text: '' },
    { line: 3, text: 'import com.android.developer.annotation.DeveloperProfile', tokens: [{ t: 'keyword', v: 'import' }, { t: 'text', v: ' com.android.developer.annotation.' }, { t: 'type', v: 'DeveloperProfile' }] },
    { line: 4, text: 'import com.android.developer.skills.AndroidDeveloper', tokens: [{ t: 'keyword', v: 'import' }, { t: 'text', v: ' com.android.developer.skills.' }, { t: 'type', v: 'AndroidDeveloper' }] },
    { line: 5, text: 'import com.android.developer.skills.AIMLDeveloper', tokens: [{ t: 'keyword', v: 'import' }, { t: 'text', v: ' com.android.developer.skills.' }, { t: 'type', v: 'AIMLDeveloper' }] },
    { line: 6, text: 'import com.android.developer.skills.IoTSpecialist', tokens: [{ t: 'keyword', v: 'import' }, { t: 'text', v: ' com.android.developer.skills.' }, { t: 'type', v: 'IoTSpecialist' }] },
    { line: 7, text: '' },
    { line: 8, text: '/**', tokens: [{ t: 'comment', v: '/**' }] },
    { line: 9, text: ' * ===================================================================', tokens: [{ t: 'comment', v: ' * ===================================================================' }] },
    { line: 10, text: ' * DEVELOPER PROFILE: SHUBHAM SHARMA', tokens: [{ t: 'comment', v: ' * DEVELOPER PROFILE: SHUBHAM SHARMA' }] },
    { line: 11, text: ' * @author Shubham Sharma', tokens: [{ t: 'comment', v: ' * ' }, { t: 'annotation', v: '@author' }, { t: 'comment', v: ' Shubham Sharma' }] },
    { line: 12, text: ' * @title Android Developer, AI/ML Developer & IoT Specialist', tokens: [{ t: 'comment', v: ' * ' }, { t: 'annotation', v: '@title' }, { t: 'comment', v: ' Android Developer, AI/ML Developer & IoT Specialist' }] },
    { line: 13, text: ' * @location Surat, Gujarat, India', tokens: [{ t: 'comment', v: ' * ' }, { t: 'annotation', v: '@location' }, { t: 'comment', v: ' Surat, Gujarat, India' }] },
    { line: 14, text: ' * @experience 2+ Years (Native Android Kotlin, IoT Telemetry, AI/ML APIs)', tokens: [{ t: 'comment', v: ' * ' }, { t: 'annotation', v: '@experience' }, { t: 'comment', v: ' 2+ Years (Native Android Kotlin, IoT Telemetry, AI/ML APIs)' }] },
    { line: 15, text: ' * ===================================================================', tokens: [{ t: 'comment', v: ' * ===================================================================' }] },
    { line: 16, text: ' */', tokens: [{ t: 'comment', v: ' */' }] },
    { line: 17, text: '@DeveloperProfile(', tokens: [{ t: 'annotation', v: '@DeveloperProfile' }, { t: 'text', v: '(' }] },
    { line: 18, text: '    name = "Shubham Sharma",', tokens: [{ t: 'prop', v: '    name' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Shubham Sharma"' }, { t: 'text', v: ',' }] },
    { line: 19, text: '    location = "Surat, Gujarat",', tokens: [{ t: 'prop', v: '    location' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Surat, Gujarat"' }, { t: 'text', v: ',' }] },
    { line: 20, text: '    experience = "2+ Years",', tokens: [{ t: 'prop', v: '    experience' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"2+ Years"' }, { t: 'text', v: ',' }] },
    { line: 21, text: '    specializations = ["Android Jetpack", "MQTT IoT", "USB OTG SDKs", "Google ML Kit", "Generative AI APIs"]', tokens: [{ t: 'prop', v: '    specializations' }, { t: 'text', v: ' = [' }, { t: 'string', v: '"Android Jetpack"' }, { t: 'text', v: ', ' }, { t: 'string', v: '"MQTT IoT"' }, { t: 'text', v: ', ' }, { t: 'string', v: '"USB OTG SDKs"' }, { t: 'text', v: ', ' }, { t: 'string', v: '"Google ML Kit"' }, { t: 'text', v: ', ' }, { t: 'string', v: '"Generative AI APIs"' }, { t: 'text', v: ']' }] },
    { line: 22, text: ')' },
    { line: 23, text: 'class AboutMe : AndroidDeveloper, AIMLDeveloper, IoTSpecialist {', tokens: [{ t: 'keyword', v: 'class' }, { t: 'type', v: ' AboutMe' }, { t: 'text', v: ' : ' }, { t: 'type', v: 'AndroidDeveloper' }, { t: 'text', v: ', ' }, { t: 'type', v: 'AIMLDeveloper' }, { t: 'text', v: ', ' }, { t: 'type', v: 'IoTSpecialist' }, { t: 'text', v: ' {' }] },
    { line: 24, text: '' },
    { line: 25, text: '    override val summary: String = """', tokens: [{ t: 'keyword', v: '    override val' }, { t: 'prop', v: ' summary' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"""' }] },
    { line: 26, text: '        Application Software Developer with 2+ years of experience in Android (Kotlin), IoT systems, and AI/ML.', tokens: [{ t: 'string', v: '        Application Software Developer with 2+ years of experience in Android (Kotlin), IoT systems, and AI/ML.' }] },
    { line: 27, text: '        Specialized in MQTT communication, OTA firmware updates, USB device integration, and real-time hardware interaction.', tokens: [{ t: 'string', v: '        Specialized in MQTT communication, OTA firmware updates, USB device integration, and real-time hardware interaction.' }] },
    { line: 28, text: '        Delivered production-grade ERP and healthcare apps with a focus on performance, reliability, and scalability.', tokens: [{ t: 'string', v: '        Delivered production-grade ERP and healthcare apps with a focus on performance, reliability, and scalability.' }] },
    { line: 29, text: '        Also works across AI/ML (Google ML Kit on-device & cloud generative AI API pipelines).', tokens: [{ t: 'string', v: '        Also works across AI/ML (Google ML Kit on-device & cloud generative AI API pipelines).' }] },
    { line: 30, text: '    """.trimIndent()', tokens: [{ t: 'string', v: '    """' }, { t: 'text', v: '.' }, { t: 'function', v: 'trimIndent' }, { t: 'text', v: '()' }] },
    { line: 31, text: '' },
    { line: 32, text: '    fun getCoreHighlights(): List<String> = listOf(', tokens: [{ t: 'keyword', v: '    fun' }, { t: 'function', v: ' getCoreHighlights' }, { t: 'text', v: '(): ' }, { t: 'type', v: 'List<String>' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: '(' }] },
    { line: 33, text: '        "Built MQTT real-time hardware telemetry systems for commercial ERP equipment",', tokens: [{ t: 'string', v: '        "Built MQTT real-time hardware telemetry systems for commercial ERP equipment"' }, { t: 'text', v: ',' }] },
    { line: 34, text: '        "Engineered dual USB/Wireless OTA firmware update architecture with rollback safeguards",', tokens: [{ t: 'string', v: '        "Engineered dual USB/Wireless OTA firmware update architecture with rollback safeguards"' }, { t: 'text', v: ',' }] },
    { line: 35, text: '        "Developed USB OTG healthcare SDKs for real-time glucometer data sync",', tokens: [{ t: 'string', v: '        "Developed USB OTG healthcare SDKs for real-time glucometer data sync"' }, { t: 'text', v: ',' }] },
    { line: 36, text: '        "Integrated third-party Generative AI APIs (Gemini, Nvidia) & ML Kit on-device vision into Compose apps"', tokens: [{ t: 'string', v: '        "Integrated third-party Generative AI APIs (Gemini, Nvidia) & ML Kit on-device vision into Compose apps"' }] },
    { line: 37, text: '    )' },
    { line: 38, text: '}' }
  ];
}

function generateExpSusampCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.experience', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.experience' }] },
    { line: 2, text: '' },
    { line: 3, text: 'import com.android.developer.annotation.CurrentRole', tokens: [{ t: 'keyword', v: 'import' }, { t: 'text', v: ' com.android.developer.annotation.' }, { t: 'type', v: 'CurrentRole' }] },
    { line: 4, text: '' },
    { line: 5, text: '@CurrentRole', tokens: [{ t: 'annotation', v: '@CurrentRole' }] },
    { line: 6, text: 'data class SusampInfotech(', tokens: [{ t: 'keyword', v: 'data class' }, { t: 'type', v: ' SusampInfotech' }, { t: 'text', v: '(' }] },
    { line: 7, text: '    val company: String = "Susamp Infotech",', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' company' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Susamp Infotech"' }, { t: 'text', v: ',' }] },
    { line: 8, text: '    val designation: String = "Android Developer",', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' designation' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Android Developer"' }, { t: 'text', v: ',' }] },
    { line: 9, text: '    val status: String = "Current Position",', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' status' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Current Position"' }, { t: 'text', v: ',' }] },
    { line: 10, text: '    val location: String = "Surat, Gujarat, India"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' location' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Surat, Gujarat, India"' }] },
    { line: 11, text: ') {' },
    { line: 12, text: '' },
    { line: 13, text: '    // Key Responsibilities & Achievements', tokens: [{ t: 'comment', v: '    // Key Responsibilities & Achievements' }] },
    { line: 14, text: '    fun getResponsibilities(): List<String> = listOf(', tokens: [{ t: 'keyword', v: '    fun' }, { t: 'function', v: ' getResponsibilities' }, { t: 'text', v: '(): ' }, { t: 'type', v: 'List<String>' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: '(' }] },
    { line: 15, text: '        "Manages and builds Android applications aligned with current Play Store trends & guidelines.",', tokens: [{ t: 'string', v: '        "Manages and builds Android applications aligned with current Play Store trends & guidelines."' }, { t: 'text', v: ',' }] },
    { line: 16, text: '        "Implements modern Jetpack Compose UIs, state management, and clean architecture.",', tokens: [{ t: 'string', v: '        "Implements modern Jetpack Compose UIs, state management, and clean architecture."' }, { t: 'text', v: ',' }] },
    { line: 17, text: '        "Optimizes application memory footprints, frame rate responsiveness, and lifecycle safety."', tokens: [{ t: 'string', v: '        "Optimizes application memory footprints, frame rate responsiveness, and lifecycle safety."' }] },
    { line: 18, text: '    )' },
    { line: 19, text: '}' }
  ];
}

function generateExpLeonsCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.experience', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.experience' }] },
    { line: 2, text: '' },
    { line: 3, text: 'data class LeonsIntegrations(', tokens: [{ t: 'keyword', v: 'data class' }, { t: 'type', v: ' LeonsIntegrations' }, { t: 'text', v: '(' }] },
    { line: 4, text: '    val company: String = "LeonsIntegrations Private Limited",', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' company' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"LeonsIntegrations Private Limited"' }, { t: 'text', v: ',' }] },
    { line: 5, text: '    val designation: String = "Application Software Developer",', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' designation' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Application Software Developer"' }, { t: 'text', v: ',' }] },
    { line: 6, text: '    val duration: String = "Jan 2024 – Dec 2025",', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' duration' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Jan 2024 – Dec 2025"' }, { t: 'text', v: ',' }] },
    { line: 7, text: '    val location: String = "Vadodara, Gujarat, India"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' location' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Vadodara, Gujarat, India"' }] },
    { line: 8, text: ') {' },
    { line: 9, text: '' },
    { line: 10, text: '    fun getKeyDeliverables(): List<String> = listOf(', tokens: [{ t: 'keyword', v: '    fun' }, { t: 'function', v: ' getKeyDeliverables' }, { t: 'text', v: '(): ' }, { t: 'type', v: 'List<String>' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: '(' }] },
    { line: 11, text: '        "Developed Android apps and reusable SDKs for IoT and ERP systems.",', tokens: [{ t: 'string', v: '        "Developed Android apps and reusable SDKs for IoT and ERP systems."' }, { t: 'text', v: ',' }] },
    { line: 12, text: '        "Implemented MQTT-based real-time communication between hardware and mobile apps.",', tokens: [{ t: 'string', v: '        "Implemented MQTT-based real-time communication between hardware and mobile apps."' }, { t: 'text', v: ',' }] },
    { line: 13, text: '        "Designed and integrated RESTful APIs for secure, scalable data exchange.",', tokens: [{ t: 'string', v: '        "Designed and integrated RESTful APIs for secure, scalable data exchange."' }, { t: 'text', v: ',' }] },
    { line: 14, text: '        "Built OTA firmware update solutions using HTTP, FTP, and MQTT.",', tokens: [{ t: 'string', v: '        "Built OTA firmware update solutions using HTTP, FTP, and MQTT."' }, { t: 'text', v: ',' }] },
    { line: 15, text: '        "Collaborated with firmware and backend teams for end-to-end reliability."', tokens: [{ t: 'string', v: '        "Collaborated with firmware and backend teams for end-to-end reliability."' }] },
    { line: 16, text: '    )' },
    { line: 17, text: '}' }
  ];
}

function generateProjectCode(projKey) {
  const map = {
    dispenser: {
      pkg: 'com.shubham.portfolio.projects',
      clsName: 'DispenserERP',
      name: 'Dispenser ERP Application',
      period: '06/2025 – 12/2025',
      status: 'In Production',
      category: 'Android + IoT + ERP',
      stack: ['Kotlin', 'Jetpack Compose', 'MQTT', 'Room DB', 'Coroutines'],
      desc: 'Real-time dispenser operations app; MQTT live data monitoring/control; Room (SQLite) + Kotlin Coroutines for offline handling; modern Android architecture.',
      emulatorId: 'dispenser',
    },
    ota: {
      pkg: 'com.shubham.portfolio.projects',
      clsName: 'OTAFirmwareUpdate',
      name: 'OTA Firmware Update Application (Wired & Wireless)',
      period: '08/2024 – 04/2025',
      status: 'Production Ready',
      category: 'Android + IoT / Hardware',
      stack: ['Kotlin', 'USB Serial API', 'HTTP/FTP', 'MQTT', 'Coroutines'],
      desc: 'Secure OTA system over HTTP/FTP/MQTT; USB-based firmware flashing with error handling; optimized transfer logic; validation + rollback for integrity.',
      emulatorId: 'ota',
    },
    glucometer: {
      pkg: 'com.shubham.portfolio.projects',
      clsName: 'GlucometerSDK',
      name: 'Glucometer SDK & Healthcare App',
      period: '05/2024 – 08/2024',
      status: 'Completed / SDK Integrated',
      category: 'Healthcare + Android SDK',
      stack: ['Kotlin', 'USB OTG Driver', 'Room Database', 'LiveData'],
      desc: 'Healthcare app for glucose monitoring; USB module integration for real-time sync from medical devices; optimized Room DB queries.',
      emulatorId: 'glucometer',
    },
    gpsmap: {
      pkg: 'com.shubham.portfolio.projects',
      clsName: 'GPSMapCameraLite',
      name: 'GPS Map Camera Lite',
      period: '2024',
      status: 'Play Store Published (com.gpsmapcameralite.geotagphotolocation)',
      category: 'Android Utility App',
      stack: ['Kotlin', 'CameraX API', 'Google Maps SDK', 'AdMob SDK'],
      desc: 'Camera app with geotagging, photo stamps, EXIF location metadata, and Google Mobile Ads SDK integration.',
      emulatorId: 'gpsmap',
    },
    surveycam: {
      pkg: 'com.shubham.portfolio.projects',
      clsName: 'SurveyCamApp',
      name: 'Survey Cam / SurveyNoteCam',
      period: '2024',
      status: 'Production App',
      category: 'Field Survey & Enterprise',
      stack: ['Kotlin', 'CameraX', 'PDF Export Engine', 'Room DB'],
      desc: 'Field-survey camera app with timesheet tracking, note taking, and PDF export/sharing.',
      emulatorId: 'surveycam',
    },
    reverseaudio: {
      pkg: 'com.shubham.portfolio.projects',
      clsName: 'ReverseAudioSinging',
      name: 'Reverse Audio / Singing Challenge',
      period: '2024',
      status: 'Play Store Published (com.reverseaudio.voicereverser.singingchallenge)',
      category: 'Media & Audio App',
      stack: ['Kotlin', 'Jetpack Compose', 'AudioTrack', 'TTS Engine'],
      desc: 'Compose-based voice recorder/reverser app with TTS and multi-language support.',
      emulatorId: 'reverseaudio',
    },
    ai_img2img: {
      pkg: 'com.shubham.portfolio.ai_ml',
      clsName: 'AIImageToImage',
      name: 'AI Image-to-Image Generator',
      period: '2025',
      status: 'Active Project',
      category: 'AI/ML + Android',
      stack: ['Kotlin', 'Jetpack Compose', 'CameraX', 'Third-party AI APIs (e.g. Gemini, Nvidia)'],
      desc: 'Android app for AI-powered image-to-image transformation, integrating third-party generative AI APIs for on-device capture → cloud inference → result rendering.',
      emulatorId: 'ai_img2img',
    },
    ai_calorie: {
      pkg: 'com.shubham.portfolio.ai_ml',
      clsName: 'AICalorieCounter',
      name: 'AI Calorie Counter',
      period: '2025',
      status: 'Testing',
      category: 'AI/ML + Android',
      stack: ['Kotlin', 'Google ML Kit', 'CameraX', 'Third-party AI APIs'],
      desc: 'Android app that identifies food from photos and estimates calorie/nutrition info, using ML Kit and integrated AI API services for recognition.',
      emulatorId: 'ai_calorie',
    },
    ai_misc: {
      pkg: 'com.shubham.portfolio.ai_ml',
      clsName: 'AIMiscApps',
      name: 'AI-Integrated Apps (misc.)',
      period: 'Ongoing',
      status: 'Modular Framework',
      category: 'AI/ML + Android',
      stack: ['Kotlin', 'Google ML Kit', 'Gemini API', 'Nvidia AI API', 'Other third-party AI APIs'],
      desc: 'Several Android apps enhanced with integrated AI features, combining on-device ML Kit capabilities with third-party generative/recognition AI APIs.',
      emulatorId: null,
    },
  };

  const p = map[projKey];
  const stackFormatted = p.stack.map(s => `"${s}"`).join(', ');

  return [
    { line: 1, text: `package ${p.pkg}`, tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ` ${p.pkg}` }] },
    { line: 2, text: '' },
    { line: 3, text: 'import com.android.developer.annotation.ProductionApp', tokens: [{ t: 'keyword', v: 'import' }, { t: 'text', v: ' com.android.developer.annotation.' }, { t: 'type', v: 'ProductionApp' }] },
    { line: 4, text: 'import com.android.developer.emulator.EmulatorPreview', tokens: [{ t: 'keyword', v: 'import' }, { t: 'text', v: ' com.android.developer.emulator.' }, { t: 'type', v: 'EmulatorPreview' }] },
    { line: 5, text: '' },
    { line: 6, text: `@ProductionApp(status = "${p.status}")`, tokens: [{ t: 'annotation', v: '@ProductionApp' }, { t: 'text', v: '(status = ' }, { t: 'string', v: `"${p.status}"` }, { t: 'text', v: ')' }] },
    { line: 7, text: p.emulatorId ? `@EmulatorPreview(targetAppId = "${p.emulatorId}")` : '// No active emulator screen mapped', tokens: p.emulatorId ? [{ t: 'annotation', v: '@EmulatorPreview' }, { t: 'text', v: '(targetAppId = ' }, { t: 'string', v: `"${p.emulatorId}"` }, { t: 'text', v: ')' }] : [{ t: 'comment', v: '// Modular template for future AI/ML app integrations' }] },
    { line: 8, text: `data class ${p.clsName}(`, tokens: [{ t: 'keyword', v: 'data class' }, { t: 'type', v: ` ${p.clsName}` }, { t: 'text', v: '(' }] },
    { line: 9, text: `    val name: String = "${p.name}",`, tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' name' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: `"${p.name}"` }, { t: 'text', v: ',' }] },
    { line: 10, text: `    val category: String = "${p.category}",`, tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' category' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: `"${p.category}"` }, { t: 'text', v: ',' }] },
    { line: 11, text: `    val period: String = "${p.period}",`, tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' period' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: `"${p.period}"` }, { t: 'text', v: ',' }] },
    { line: 12, text: `    val techStack: List<String> = listOf(${stackFormatted}),`, tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' techStack' }, { t: 'text', v: ': ' }, { t: 'type', v: 'List<String>' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: `(${stackFormatted}),` }] },
    { line: 13, text: `    val description: String = "${p.desc}"`, tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' description' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ' = ' }, { t: 'string', v: `"${p.desc}"` }] },
    { line: 14, text: ') {' },
    { line: 15, text: '' },
    { line: 16, text: '    fun launchInEmulator(): Boolean {', tokens: [{ t: 'keyword', v: '    fun' }, { t: 'function', v: ' launchInEmulator' }, { t: 'text', v: '(): ' }, { t: 'type', v: 'Boolean' }, { t: 'text', v: ' {' }] },
    { line: 17, text: `        println("Launching ${p.name} on Pixel AVD...")`, tokens: [{ t: 'function', v: '        println' }, { t: 'text', v: '(' }, { t: 'string', v: `"Launching ${p.name} on Pixel AVD..."` }, { t: 'text', v: ')' }] },
    { line: 18, text: '        return true', tokens: [{ t: 'keyword', v: '        return' }, { t: 'number', v: ' true' }] },
    { line: 19, text: '    }' },
    { line: 20, text: '}' }
  ];
}

function generateTechStackCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.skills', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.skills' }] },
    { line: 2, text: '' },
    { line: 3, text: 'object TechStack {', tokens: [{ t: 'keyword', v: 'object' }, { t: 'type', v: ' TechStack' }, { t: 'text', v: ' {' }] },
    { line: 4, text: '' },
    { line: 5, text: '    val languages = listOf("Kotlin", "Java", "Python", "React Native")', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' languages' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: '(' }, { t: 'string', v: '"Kotlin", "Java", "Python", "React Native"' }, { t: 'text', v: ')' }] },
    { line: 6, text: '' },
    { line: 7, text: '    val androidFrameworks = listOf(', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' androidFrameworks' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: '(' }] },
    { line: 8, text: '        "Jetpack Compose", "ViewModel", "LiveData", "Room Database", "Coroutines", "CameraX", "XML Layouts"', tokens: [{ t: 'string', v: '        "Jetpack Compose", "ViewModel", "LiveData", "Room Database", "Coroutines", "CameraX", "XML Layouts"' }] },
    { line: 9, text: '    )' },
    { line: 10, text: '' },
    { line: 11, text: '    val networkingProtocols = listOf("MQTT", "WebSocket", "TCP/IP", "HTTP/HTTPS", "USB Communication")', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' networkingProtocols' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: '(' }, { t: 'string', v: '"MQTT", "WebSocket", "TCP/IP", "HTTP/HTTPS", "USB Communication"' }, { t: 'text', v: ')' }] },
    { line: 12, text: '' },
    { line: 13, text: '    val databases = listOf("SQLite", "Room Database")', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' databases' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: '(' }, { t: 'string', v: '"SQLite", "Room Database"' }, { t: 'text', v: ')' }] },
    { line: 14, text: '' },
    { line: 15, text: '    val developerTools = listOf(', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' developerTools' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: '(' }] },
    { line: 16, text: '        "Android Studio", "Gradle", "ADB", "REST API integration", "OTA firmware updates", "IoT systems", "Google Mobile Ads SDK"', tokens: [{ t: 'string', v: '        "Android Studio", "Gradle", "ADB", "REST API integration", "OTA firmware updates", "IoT systems", "Google Mobile Ads SDK"' }] },
    { line: 17, text: '    )' },
    { line: 18, text: '' },
    { line: 19, text: '    val aiMlCompetencies = listOf(', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' aiMlCompetencies' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: '(' }] },
    { line: 20, text: '        "Google ML Kit (on-device recognition)",', tokens: [{ t: 'string', v: '        "Google ML Kit (on-device recognition)"' }, { t: 'text', v: ',' }] },
    { line: 21, text: '        "Third-party generative AI API integration (Gemini, Nvidia, and others)",', tokens: [{ t: 'string', v: '        "Third-party generative AI API integration (Gemini, Nvidia, and others)"' }, { t: 'text', v: ',' }] },
    { line: 22, text: '        "Image-to-image AI pipelines",', tokens: [{ t: 'string', v: '        "Image-to-image AI pipelines"' }, { t: 'text', v: ',' }] },
    { line: 23, text: '        "AI-based food/calorie recognition",', tokens: [{ t: 'string', v: '        "AI-based food/calorie recognition"' }, { t: 'text', v: ',' }] },
    { line: 24, text: '        "Blending on-device ML with cloud AI APIs in production Android apps"', tokens: [{ t: 'string', v: '        "Blending on-device ML with cloud AI APIs in production Android apps"' }] },
    { line: 25, text: '    )' },
    { line: 26, text: '}' }
  ];
}

function generateAchievementsCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.achievements', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.achievements' }] },
    { line: 2, text: '' },
    { line: 3, text: 'object Achievements {', tokens: [{ t: 'keyword', v: 'object' }, { t: 'type', v: ' Achievements' }, { t: 'text', v: ' {' }] },
    { line: 4, text: '' },
    { line: 5, text: '    val list = listOf(', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' list' }, { t: 'text', v: ' = ' }, { t: 'function', v: 'listOf' }, { t: 'text', v: '(' }] },
    { line: 6, text: '        "Led development of 3 IoT-based solutions, improving client satisfaction by 20%",', tokens: [{ t: 'string', v: '        "Led development of 3 IoT-based solutions, improving client satisfaction by 20%"' }, { t: 'text', v: ',' }] },
    { line: 7, text: '        "Reduced application processing time by 30% through optimized native Android development",', tokens: [{ t: 'string', v: '        "Reduced application processing time by 30% through optimized native Android development"' }, { t: 'text', v: ',' }] },
    { line: 8, text: '        "Developed a reusable Kotlin library adopted across 2 enterprise-level projects",', tokens: [{ t: 'string', v: '        "Developed a reusable Kotlin library adopted across 2 enterprise-level projects"' }, { t: 'text', v: ',' }] },
    { line: 9, text: '        "Enhanced reliability of hardware communication in IoT applications",', tokens: [{ t: 'string', v: '        "Enhanced reliability of hardware communication in IoT applications"' }, { t: 'text', v: ',' }] },
    { line: 10, text: '        "Certificate of Appreciation, LeonsIntegrations Pvt. Ltd. — for delivery of production-level app"', tokens: [{ t: 'string', v: '        "Certificate of Appreciation, LeonsIntegrations Pvt. Ltd. — for delivery of production-level app"' }] },
    { line: 11, text: '    )' },
    { line: 12, text: '}' }
  ];
}

function generateEducationCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.education', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.education' }] },
    { line: 2, text: '' },
    { line: 3, text: 'data class Degree(', tokens: [{ t: 'keyword', v: 'data class' }, { t: 'type', v: ' Degree' }, { t: 'text', v: '(' }] },
    { line: 4, text: '    val title: String,', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' title' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ',' }] },
    { line: 5, text: '    val college: String,', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' college' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ',' }] },
    { line: 6, text: '    val duration: String,', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' duration' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }, { t: 'text', v: ',' }] },
    { line: 7, text: '    val location: String', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' location' }, { t: 'text', v: ': ' }, { t: 'type', v: 'String' }] },
    { line: 8, text: ')' },
    { line: 9, text: '' },
    { line: 10, text: 'object Education {', tokens: [{ t: 'keyword', v: 'object' }, { t: 'type', v: ' Education' }, { t: 'text', v: ' {' }] },
    { line: 11, text: '    val bachelor = Degree(', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' bachelor' }, { t: 'text', v: ' = ' }, { t: 'type', v: 'Degree' }, { t: 'text', v: '(' }] },
    { line: 12, text: '        title = "B.E. in Computer Engineering",', tokens: [{ t: 'prop', v: '        title' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"B.E. in Computer Engineering"' }, { t: 'text', v: ',' }] },
    { line: 13, text: '        college = "G H Patel College of Engineering and Technology",', tokens: [{ t: 'prop', v: '        college' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"G H Patel College of Engineering and Technology"' }, { t: 'text', v: ',' }] },
    { line: 14, text: '        duration = "08/2020 – 04/2024",', tokens: [{ t: 'prop', v: '        duration' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"08/2020 – 04/2024"' }, { t: 'text', v: ',' }] },
    { line: 15, text: '        location = "Anand, Gujarat"', tokens: [{ t: 'prop', v: '        location' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Anand, Gujarat"' }] },
    { line: 16, text: '    )' },
    { line: 17, text: '' },
    { line: 18, text: '    val highSchool = Degree(', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' highSchool' }, { t: 'text', v: ' = ' }, { t: 'type', v: 'Degree' }, { t: 'text', v: '(' }] },
    { line: 19, text: '        title = "HSC (Science)",', tokens: [{ t: 'prop', v: '        title' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"HSC (Science)"' }, { t: 'text', v: ',' }] },
    { line: 20, text: '        college = "Shiksha Niketan Sr. Sec. School",', tokens: [{ t: 'prop', v: '        college' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Shiksha Niketan Sr. Sec. School"' }, { t: 'text', v: ',' }] },
    { line: 21, text: '        duration = "04/2019 – 04/2020",', tokens: [{ t: 'prop', v: '        duration' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"04/2019 – 04/2020"' }, { t: 'text', v: ',' }] },
    { line: 22, text: '        location = "Jammu, India"', tokens: [{ t: 'prop', v: '        location' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Jammu, India"' }] },
    { line: 23, text: '    )' },
    { line: 24, text: '}' }
  ];
}

function generateContactCode() {
  return [
    { line: 1, text: 'package com.shubham.portfolio.contact', tokens: [{ t: 'keyword', v: 'package' }, { t: 'text', v: ' com.shubham.portfolio.contact' }] },
    { line: 2, text: '' },
    { line: 3, text: 'import com.android.developer.network.HttpRequest', tokens: [{ t: 'keyword', v: 'import' }, { t: 'text', v: ' com.android.developer.network.' }, { t: 'type', v: 'HttpRequest' }] },
    { line: 4, text: '' },
    { line: 5, text: '/**', tokens: [{ t: 'comment', v: '/**' }] },
    { line: 6, text: ' * CONTACT CONTROLLER: SHUBHAM SHARMA', tokens: [{ t: 'comment', v: ' * CONTACT CONTROLLER: SHUBHAM SHARMA' }] },
    { line: 7, text: ' * Connect via Formspree / EmailJS or Terminal (`contact --email`)', tokens: [{ t: 'comment', v: ' * Connect via Formspree / EmailJS or Terminal (`contact --email`)' }] },
    { line: 8, text: ' */', tokens: [{ t: 'comment', v: ' */' }] },
    { line: 9, text: 'object Contact {', tokens: [{ t: 'keyword', v: 'object' }, { t: 'type', v: ' Contact' }, { t: 'text', v: ' {' }] },
    { line: 10, text: '    val linkedin = "https://www.linkedin.com/in/shubham-sharma-55b5821b9/"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' linkedin' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"https://www.linkedin.com/in/shubham-sharma-55b5821b9/"' }] },
    { line: 11, text: '    val location = "Surat, Gujarat, India"', tokens: [{ t: 'keyword', v: '    val' }, { t: 'prop', v: ' location' }, { t: 'text', v: ' = ' }, { t: 'string', v: '"Surat, Gujarat, India"' }] },
    { line: 12, text: '' },
    { line: 13, text: '    // Interactive Form Below:', tokens: [{ t: 'comment', v: '    // Interactive Form Below:' }] },
    { line: 14, text: '}' }
  ];
}
