<template>
  <article>
    <div class="container-fluid masthead">
      <header class="col">
        <h1 class="jumbotron-heading">Brand Style Generator</h1>
        <p class="lead text-muted">
          The generator will create a downloadable
          <code>brand_style.json</code>.
        </p>
      </header>
    </div>
    <FormulateForm
      v-model="data"
      :keep-model-data="true"
      @submit="downloadFile"
      #default="{ hasErrors }"
      :debounce="50"
      invalid-message="Not all fields were filled out properly."
      :style="css"
    >
      <div class="container-fluid border-top">
        <div class="row" id="accordion">
          <nav class="col-md-3 border-right steps__nav">
            <ul class="nav flex-column">
              <li
                class="nav-item"
                v-for="(data, index) in steps_nav"
                :key="index"
              >
                <a
                  href="#"
                  class="nav-link"
                  :data-target="'#' + data.target"
                  :data-toggle="data.done ? 'collapse' : ''"
                  :class="{ disabled: !data.done }"
                >
                  {{ data.text }}
                </a>
              </li>
            </ul>
          </nav>

          <div class="col-md-9 steps__fields">
            <div class="collapse show" id="business" data-parent="#accordion">
              <Business />
              <NextStep
                next="#logo"
                current="business"
                @update-nav="updateNav"
              />
            </div>

            <div class="collapse" id="logo" data-parent="#accordion">
              <Logo />
              <NextStep
                next="#colors"
                prev="#business"
                current="logo"
                @update-nav="updateNav"
              />
            </div>

            <div class="collapse" id="colors" data-parent="#accordion">
              <Colors :colors="colors" />
              <NextStep
                next="#settings"
                prev="#logo"
                current="colors"
                @update-nav="updateNav"
              />
            </div>

            <div class="collapse" id="settings" data-parent="#accordion">
              <EmailSettings
                :colors="colors"
                :field="data.email_settings"
                :brand_colors="compileColorList(data.colors)"
              />
              <NextStep
                next="#fonts"
                prev="#logo"
                current="settings"
                @update-nav="updateNav"
              />
            </div>

            <div class="collapse" id="fonts" data-parent="#accordion">
              <Fonts
                :fallback_font_list="fallback_font_list"
                :font_weight_list="font_weight_list"
                :font_style_list="font_style_list"
              />
              <NextStep
                next="#h1"
                prev="#settings"
                current="fonts"
                @update-nav="updateNav"
              />
            </div>

            <FormulateInput
              type="group"
              name="font_styles"
              class="mb-3"
              add-label="+ Add Font Styles"
              validation="required"
            >
              <div class="collapse" id="h1" data-parent="#accordion">
                <HeadlineOne
                  :fontstyles="data.font_styles"
                  :colors="colors"
                  :fallback_font_list="fallback_font_list"
                  :font_weight_list="font_weight_list"
                  :text_transform_list="text_transform_list"
                  :align_list="align_list"
                  :cta_width_list="cta_width_list"
                  :mobile_fontsize_list="mobile_fontsize_list"
                  :mobile_align_list="mobile_align_list"
                  :field="data.font_styles"
                  :font_style_list="font_style_list"
                  :font_family="compileFontList(data.fonts, data.webfonts)"
                  :brand_colors="compileColorList(data.colors)"
                />
                <NextStep
                  next="#h2"
                  prev="#colors"
                  current="h1"
                  @update-nav="updateNav"
                />
              </div>

              <div class="collapse" id="h2" data-parent="#accordion">
                <HeadlineTwo
                  :fontstyles="data.font_styles"
                  :colors="colors"
                  :fallback_font_list="fallback_font_list"
                  :font_weight_list="font_weight_list"
                  :text_transform_list="text_transform_list"
                  :align_list="align_list"
                  :cta_width_list="cta_width_list"
                  :mobile_fontsize_list="mobile_fontsize_list"
                  :mobile_align_list="mobile_align_list"
                  :field="data.font_styles"
                  :font_style_list="font_style_list"
                  :font_family="compileFontList(data.fonts, data.webfonts)"
                  :brand_colors="compileColorList(data.colors)"
                />
                <NextStep
                  next="#h3"
                  prev="#h1"
                  current="h2"
                  @update-nav="updateNav"
                />
              </div>

              <div class="collapse" id="h3" data-parent="#accordion">
                <HeadlineThree
                  :fontstyles="data.font_styles"
                  :colors="colors"
                  :fallback_font_list="fallback_font_list"
                  :font_weight_list="font_weight_list"
                  :text_transform_list="text_transform_list"
                  :align_list="align_list"
                  :cta_width_list="cta_width_list"
                  :mobile_fontsize_list="mobile_fontsize_list"
                  :mobile_align_list="mobile_align_list"
                  :field="data.font_styles"
                  :font_style_list="font_style_list"
                  :font_family="compileFontList(data.fonts, data.webfonts)"
                  :brand_colors="compileColorList(data.colors)"
                />
                <NextStep
                  next="#h4"
                  prev="#h2"
                  current="h3"
                  @update-nav="updateNav"
                />
              </div>

              <div class="collapse" id="h4" data-parent="#accordion">
                <HeadlineFour
                  :fontstyles="data.font_styles"
                  :colors="colors"
                  :fallback_font_list="fallback_font_list"
                  :font_weight_list="font_weight_list"
                  :text_transform_list="text_transform_list"
                  :align_list="align_list"
                  :cta_width_list="cta_width_list"
                  :mobile_fontsize_list="mobile_fontsize_list"
                  :mobile_align_list="mobile_align_list"
                  :field="data.font_styles"
                  :font_style_list="font_style_list"
                  :font_family="compileFontList(data.fonts, data.webfonts)"
                  :brand_colors="compileColorList(data.colors)"
                />
                <NextStep
                  next="#p1"
                  prev="#h3"
                  current="h4"
                  @update-nav="updateNav"
                />
              </div>

              <div class="collapse" id="p1" data-parent="#accordion">
                <ParagraphOne
                  :fontstyles="data.font_styles"
                  :colors="colors"
                  :fallback_font_list="fallback_font_list"
                  :font_weight_list="font_weight_list"
                  :text_transform_list="text_transform_list"
                  :align_list="align_list"
                  :cta_width_list="cta_width_list"
                  :mobile_fontsize_list="mobile_fontsize_list"
                  :mobile_align_list="mobile_align_list"
                  :field="data.font_styles"
                  :font_style_list="font_style_list"
                  :font_family="compileFontList(data.fonts, data.webfonts)"
                  :brand_colors="compileColorList(data.colors)"
                />
                <NextStep
                  next="#p2"
                  prev="#h4"
                  current="p1"
                  @update-nav="updateNav"
                />
              </div>

              <div class="collapse" id="p2" data-parent="#accordion">
                <ParagraphTwo
                  :fontstyles="data.font_styles"
                  :colors="colors"
                  :fallback_font_list="fallback_font_list"
                  :font_weight_list="font_weight_list"
                  :text_transform_list="text_transform_list"
                  :align_list="align_list"
                  :cta_width_list="cta_width_list"
                  :mobile_fontsize_list="mobile_fontsize_list"
                  :mobile_align_list="mobile_align_list"
                  :field="data.font_styles"
                  :font_style_list="font_style_list"
                  :font_family="compileFontList(data.fonts, data.webfonts)"
                  :brand_colors="compileColorList(data.colors)"
                />
                <NextStep
                  next="#p3"
                  prev="#p1"
                  current="p2"
                  @update-nav="updateNav"
                />
              </div>

              <div class="collapse" id="p3" data-parent="#accordion">
                <ParagraphThree
                  :fontstyles="data.font_styles"
                  :colors="colors"
                  :fallback_font_list="fallback_font_list"
                  :font_weight_list="font_weight_list"
                  :text_transform_list="text_transform_list"
                  :align_list="align_list"
                  :cta_width_list="cta_width_list"
                  :mobile_fontsize_list="mobile_fontsize_list"
                  :mobile_align_list="mobile_align_list"
                  :field="data.font_styles"
                  :font_style_list="font_style_list"
                  :font_family="compileFontList(data.fonts, data.webfonts)"
                  :brand_colors="compileColorList(data.colors)"
                />
                <NextStep
                  next="#bullets"
                  prev="#p2"
                  current="p3"
                  @update-nav="updateNav"
                />
              </div>

              <div class="collapse" id="bullets" data-parent="#accordion">
                <Bullets
                  :fontstyles="data.font_styles"
                  :colors="colors"
                  :fallback_font_list="fallback_font_list"
                  :font_weight_list="font_weight_list"
                  :text_transform_list="text_transform_list"
                  :align_list="align_list"
                  :cta_width_list="cta_width_list"
                  :mobile_fontsize_list="mobile_fontsize_list"
                  :mobile_align_list="mobile_align_list"
                  :field="data.font_styles"
                  :font_family="compileFontList(data.fonts, data.webfonts)"
                  :brand_colors="compileColorList(data.colors)"
                />
                <NextStep
                  next="#cta"
                  prev="#p3"
                  current="bullets"
                  @update-nav="updateNav"
                />
              </div>
            </FormulateInput>

            <div class="collapse" id="cta" data-parent="#accordion">
              <Cta
                :styles="data.cta"
                :colors="colors"
                :fallback_font_list="fallback_font_list"
                :font_weight_list="font_weight_list"
                :text_transform_list="text_transform_list"
                :align_list="align_list"
                :cta_width_list="cta_width_list"
                :field="data.cta"
                :font_style_list="font_style_list"
                :font_family="compileFontList(data.fonts, data.webfonts)"
                :brand_colors="compileColorList(data.colors)"
              />
              <NextStep
                next="#headlines"
                prev="#bullets"
                current="cta"
                @update-nav="updateNav"
              />
            </div>

            <div class="collapse" id="headlines" data-parent="#accordion">
              <ElementsHeadlines
                :colors="colors"
                :fallback_font_list="fallback_font_list"
                :font_weight_list="font_weight_list"
                :text_transform_list="text_transform_list"
                :align_list="align_list"
                :cta_width_list="cta_width_list"
                :mobile_fontsize_list="mobile_fontsize_list"
                :field="data.headlines"
                :font_style_list="font_style_list"
                :font_family="compileFontList(data.fonts, data.webfonts)"
                :brand_colors="compileColorList(data.colors)"
              />
              <NextStep
                next="#paragraphs"
                prev="#cta"
                current="headlines"
                @update-nav="updateNav"
              />
            </div>

            <div class="collapse" id="paragraphs" data-parent="#accordion">
              <ElementsParagraphs
                :colors="colors"
                :fallback_font_list="fallback_font_list"
                :font_weight_list="font_weight_list"
                :text_transform_list="text_transform_list"
                :align_list="align_list"
                :cta_width_list="cta_width_list"
                :mobile_fontsize_list="mobile_fontsize_list"
                :field="data.paragraphs"
                :font_style_list="font_style_list"
                :font_family="compileFontList(data.fonts, data.webfonts)"
                :brand_colors="compileColorList(data.colors)"
              />
              <NextStep
                next="#ctas"
                prev="#headlines"
                current="paragraphs"
                @update-nav="updateNav"
              />
            </div>

            <div class="collapse" id="ctas" data-parent="#accordion">
              <ElementsCtas
                :colors="colors"
                :fallback_font_list="fallback_font_list"
                :font_weight_list="font_weight_list"
                :text_transform_list="text_transform_list"
                :align_list="align_list"
                :cta_width_list="cta_width_list"
                :field="data.ctas"
                :font_style_list="font_style_list"
                :font_family="compileFontList(data.fonts, data.webfonts)"
                :brand_colors="compileColorList(data.colors)"
              />
              <NextStep prev="#paragraphs" current="ctas" />
            </div>
          </div>
        </div>
      </div>

      <div
        style="position: fixed; bottom: 0; width:100%; padding: 1em 30px;"
        class="bg-dark text-center"
      >
        <FormulateErrors />
        <FormulateInput type="submit" value="Download Brand Styles" />
      </div>
    </FormulateForm>

    <div v-if="false">
      <pre>
      <h3>data</h3>
          {{ data }}
      </pre>

      <pre>
          <h3>data download</h3>
          {{ data_download }}
      </pre>
    </div>
  </article>
</template>

<script>
import ColorPicker from '../components/ColorPicker';

import Business from '../components/Business';
import Logo from '../components/Logo';
import EmailSettings from '../components/EmailSettings';
import Fonts from '../components/Fonts';
import Colors from '../components/Colors';
import HeadlineOne from '../components/HeadlineOne';
import HeadlineTwo from '../components/HeadlineTwo';
import HeadlineThree from '../components/HeadlineThree';
import HeadlineFour from '../components/HeadlineFour';
import ParagraphOne from '../components/ParagraphOne';
import ParagraphTwo from '../components/ParagraphTwo';
import ParagraphThree from '../components/ParagraphThree';
import Bullets from '../components/Bullets';
import Cta from '../components/Cta';
import ElementsHeadlines from '../components/ElementsHeadlines';
import ElementsParagraphs from '../components/ElementsParagraphs';
import ElementsCtas from '../components/ElementsCtas';
import NextStep from '../components/NextStep';

import { transformFontStyles } from '../functions/font_styles.js';
import { concatGoogleFont } from '../functions/google_font.js';
import {
  cleanupStandardCta,
  cleanupCtaArray,
  copyCta,
} from '../functions/cta.js';

import {
  copyHeadlines,
  copyParagraphs,
  stringToNumber,
} from '../functions/elements.js';

export default {
  name: 'JsonFile',
  components: {
    ColorPicker,
    Business,
    Logo,
    EmailSettings,
    Fonts,
    Colors,
    HeadlineOne,
    HeadlineTwo,
    HeadlineThree,
    HeadlineFour,
    ParagraphOne,
    ParagraphTwo,
    ParagraphThree,
    Bullets,
    Cta,
    ElementsHeadlines,
    ElementsParagraphs,
    ElementsCtas,
    NextStep,
  },
  data() {
    return {
      //default colors
      colors: {
        black: '#000000',
        gray: '#f9f6f4',
        white: '#ffffff',
        red: '#da2128',
        med_gray: '#cccccc',
      },

      // init dropdown options
      fallback_font_list: {
        'Arial, Helvetica, sans-serif': 'Arial, Helvetica, sans-serif',
        "'Arial Black', Gadget, sans-serif":
          "'Arial Black', Gadget, sans-serif",
        'Calibri,Arial,sans-serif': 'Calibri,Arial,sans-serif',
        "'Courier New', Courier, monospace":
          "'Courier New', Courier, monospace",
        'Georgia, Times, serif': 'Georgia, Times, serif',
        'Helvetica, Arial, sans-serif': 'Helvetica, Arial, sans-serif',
        'Impact, Charcoal, sans-serif': 'Impact, Charcoal, sans-serif',
        "'Palatino', Palatino Linotype Georgia, serif":
          "'Palatino', Palatino Linotype Georgia, serif",
        'Tahoma, Geneva, sans-serif': 'Tahoma, Geneva, sans-serif',
        "'Times New Roman', Times, serif": "'Times New Roman', Times, serif",
        "'Trebuchet MS', Helvetica, sans-serif":
          "'Trebuchet MS', Helvetica, sans-serif",
        'Verdana, Geneva, sans-serif': 'Verdana, Geneva, sans-serif',
      },

      font_weight_list: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },

      text_transform_list: {
        none: 'None',
        uppercase: 'Uppercase',
        lowercase: 'Lowercase',
      },

      align_list: {
        left: 'Left',
        center: 'Center',
        right: 'Right',
      },

      mobile_fontsize_list: {
        match: 'match desktop',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        p1: 'p1',
        p2: 'p2',
        p3: 'p3',
      },

      mobile_align_list: {
        match: 'Match Desktop',
        center: 'Center',
        left: 'Left',
        right: 'Right',
      },

      cta_width_list: {
        fixed: 'Fixed Width',
        fluid: '100%',
        auto: 'Auto',
      },

      font_style_list: {
        normal: 'Normal',
        italic: 'Italic',
      },

      steps_nav: [],
      data: {},
      data_download: {},
    };
  },
  methods: {
    compileFontList(google, webfonts) {
      if (google || webfonts) {
        const concat = google.concat(webfonts);
        const jsonObject = concat.map(JSON.stringify);
        const uniqueSet = new Set(jsonObject);
        const uniqueArray = Array.from(uniqueSet).map(JSON.parse);

        let object = {};
        for (const element of uniqueArray) {
          object[`${element.name}`] = element.name;
        }

        return { none: 'No font chosen.', ...object };
      }
    },
    compileColorList(colors) {
      if (colors) {
        const brand_colors = colors.map((color) => color.value);
        return brand_colors;
      }
    },
    updateNav(current) {
      this.steps_nav = this.steps_nav.map((nav) => {
        if (nav.target == current) {
          return {
            text: nav.text,
            target: nav.target,
            done: true,
          };
        }

        return nav;
      });
    },
    downloadFile() {
      //this.transformObj();
      const text = JSON.stringify(this.transformObj(), null, 2);
      const filename = 'brand_style.json';
      const element = document.createElement('a');
      element.setAttribute(
        'href',
        'data:application/json;charset=utf-8,' + encodeURIComponent(text)
      );
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    transformObj() {
      // deep clone object
      let dataClone = JSON.parse(JSON.stringify(this.data));

      // clean up clone
      dataClone = Object.assign({}, dataClone, {
        email_settings: this.data.email_settings[0],
        custom_modules: [],
        font_styles: transformFontStyles(this.data.font_styles[0]),
        fonts: concatGoogleFont(this.data.fonts, this.data.webfonts),
        cta: cleanupStandardCta(this.data.cta[0]),
        elements: {
          headlines: [],
          paragraphs: [],
          ctas: [],
        },
      });

      // add headlines to elements
      dataClone.elements.headlines = [
        ...copyHeadlines(dataClone, 4),
        ...stringToNumber(dataClone.headlines),
      ];

      // add paragraphs to elements
      dataClone.elements.paragraphs = [
        ...copyParagraphs(dataClone, 8),
        ...stringToNumber(dataClone.paragraphs),
      ];

      // add ctas to elements
      dataClone.elements.ctas = [
        ...copyCta(dataClone),
        ...cleanupCtaArray(dataClone.ctas),
      ];

      //empty out array
      delete dataClone.headlines;
      delete dataClone.paragraphs;
      delete dataClone.ctas;
      delete dataClone.webfonts;

      //this.data_download = dataClone;

      return { brand: dataClone };
    },
  },
  created() {
    this.steps_nav = [
      { text: 'Business Info', target: 'business', done: false },
      { text: 'Logo', target: 'logo', done: false },
      { text: 'Colors', target: 'colors', done: false },
      { text: 'Email Settings', target: 'settings', done: false },
      { text: 'Fonts', target: 'fonts', done: false },
      { text: 'Standards Headline One', target: 'h1', done: false },
      { text: 'Standards Headline Two', target: 'h2', done: false },
      { text: 'Standards Headline Three', target: 'h3', done: false },
      { text: 'Standards Headline Four', target: 'h4', done: false },
      { text: 'Standards Paragraph One', target: 'p1', done: false },
      { text: 'Standards Paragraph Two', target: 'p2', done: false },
      { text: 'Standards Paragraph Three', target: 'p3', done: false },
      { text: 'Standards Bullets', target: 'bullets', done: false },
      { text: 'Standards CTA', target: 'cta', done: false },
      { text: 'Customs Headlines', target: 'headlines', done: false },
      { text: 'Customs Paragraphs', target: 'paragraphs', done: false },
      { text: 'Customs CTAs', target: 'ctas', done: false },
    ];
  },
  computed: {
    css() {
      if (this.data && this.data.email_settings) {
        if (this.data.email_settings[0].overflow_color) {
          var overflow = `--overflow-color: ${this.data.email_settings[0].overflow_color};`;
        }

        if (this.data.email_settings[0].module_bgcolor) {
          var module = `--module-color: ${this.data.email_settings[0].module_bgcolor};`;
        }

        return `${overflow} ${module}`;
      }
    },
  },
};
</script>
