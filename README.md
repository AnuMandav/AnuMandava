<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Anu Mandava - Senior Data Engineer</title>
<style>
  /* Reset and global styles */
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: radial-gradient(circle at top, #001f4d, #000814);
    color: #fff;
    text-align: center;
    overflow-x: hidden;
  }

  a {
    color: #1E90FF;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    color: #32CD32;
    text-shadow: 0 0 10px #32CD32;
  }

  hr {
    border: 1px solid #555;
    width: 60%;
    margin: 30px auto;
  }

  /* Glow animations */
  .glow {
    text-shadow: 0 0 5px #1E90FF, 0 0 10px #1E90FF, 0 0 20px #1E90FF;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { text-shadow: 0 0 5px #1E90FF, 0 0 10px #1E90FF; }
    50% { text-shadow: 0 0 15px #1E90FF, 0 0 25px #32CD32; }
    100% { text-shadow: 0 0 5px #1E90FF, 0 0 10px #1E90FF; }
  }

  /* Fade-in animation */
  .fade-in {
    opacity: 0;
    animation: fadeIn 2s forwards;
  }

  @keyframes fadeIn {
    to { opacity: 1; }
  }

  /* Section styling */
  section {
    padding: 50px 20px;
    max-width: 800px;
    margin: auto;
  }

  h1, h2 {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    text-align: left;
  }

  ul li {
    margin-bottom: 12px;
    font-size: 16px;
  }

  /* Button */
  .btn {
    display: inline-block;
    padding: 12px 25px;
    margin-top: 20px;
    color: #fff;
    background: #1E90FF;
    border-radius: 25px;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 0 0 10px #1E90FF;
    transition: 0.3s;
  }

  .btn:hover {
    background: #32CD32;
    box-shadow: 0 0 20px #32CD32;
  }

  /* Skills badges */
  .skills span {
    display: inline-block;
    margin: 5px;
    padding: 6px 12px;
    border-radius: 15px;
    background: #0077b5;
    box-shadow: 0 0 5px #0077b5;
    font-size: 14px;
  }

</style>
</head>
<body>

<!-- Header -->
<section>
  <h1 class="glow fade-in">👋 Hi, I'm Anu Mandava</h1>
  <p class="fade-in">Senior Data Engineer | Azure BI Developer</p>
  <p class="fade-in">📍 Toronto, ON, Canada</p>
  <p class="fade-in">
    📫 <a href="mailto:anumandava2@gmail.com">Email me</a> |  
    🔗 <a href="https://www.linkedin.com/in/anu-mandava-410331155/" target="_blank">LinkedIn</a> |  
    🧠 <a href="https://github.com/anumandava" target="_blank">GitHub</a>
  </p>
  <a href="Anu_Mandava_Resume.pdf" class="btn fade-in" download>📄 Download My Resume</a>
</section>

<hr>

<!-- About Me -->
<section>
  <h2 class="glow fade-in">👩‍💻 About Me</h2>
  <p class="fade-in">
    I have 7+ years of experience transforming raw data into actionable business insights.
    I specialize in building scalable cloud-based ETL pipelines, crafting interactive Power BI dashboards,
    and helping organizations make data-driven decisions.
  </p>
</section>

<!-- Skills -->
<section>
  <h2 class="glow fade-in">💡 Skills</h2>
  <div class="skills fade-in">
    <span>Power BI</span>
    <span>Azure Data Factory</span>
    <span>Azure Databricks</span>
    <span>SQL / T-SQL</span>
    <span>SSIS / SSRS / SSAS</span>
    <span>Python</span>
    <span>DAX</span>
    <span>Snowflake</span>
    <span>Tableau</span>
  </div>
</section>

<!-- What I Do -->
<section>
  <h2 class="glow fade-in">🚀 What I Do</h2>
  <ul class="fade-in">
    <li>Design and optimize end-to-end ETL pipelines using <b>Azure Data Factory</b> and <b>Databricks</b></li>
    <li>Develop dynamic Power BI dashboards with advanced <b>DAX</b> calculations</li>
    <li>Migrate legacy BI systems to modern Azure platforms with <b>RLS</b> and data governance</li>
    <li>Automate workflows & enhance data quality using <b>Python</b> and <b>Power BI</b></li>
  </ul>
</section>

<!-- Footer -->
<section>
  <p class="fade-in">© 2025 Anu Mandava. All rights reserved.</p>
</section>

</body>
</html>
