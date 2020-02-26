<?php
// NOTE: This page is generated automatically; please do not edit it directly. See generate-pages.js
$pageTitle = 'Charts Standalone Gallery: Percentage Bar';
$pageDescription = 'ag-Charts is a highly performant charting library with a clean API to effortlessly create beautiful visualizations.';
$pageKeywords = 'Javascript Grid Charting';
$pageGroup = 'feature';
include '../documentation-main/documentation_header.php';
define('skipInPageNav', true);
?>

<h1 class="heading">Charts Standalone Gallery: Percentage Bar</h1>

<p class="lead">
    A bar chart showing the normalisation of data into percentages.
</p>

<?= chart_example('Percentage Bar', 'percentage-bar', 'generated', array('exampleHeight' => '60vh')) ?>

<div class="chart-navigation">
    <a class="chart-navigation__left" href="./stacked-bar.php">❮&nbsp;&nbsp;Stacked Bar</a>
    <a class="chart-navigation__right" href="./bar-with-negative-values.php">Bar With Negative Values&nbsp;&nbsp;❯</a>
</div>

<?php include '../documentation-main/documentation_footer.php'; ?>