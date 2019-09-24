import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { CoreComponent } from './core/core.component';
import { SidenavComponent } from './sections/sidenav/sidenav.component';
import { EditorComponent } from './editor.component';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCard,
  MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSelectModule,
  MatSidenavModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LabeledGraphicComponent } from './controls/sp-control/labeled-graphic/labeled-graphic.component';
import { PdfComponent } from './controls/sp-control/pdf/pdf.component';
import { TextComponent } from './controls/sp-control/text/text.component';
import { DynamicControlDirective } from './core/dynamic-control.directive';
import { DynamicControlComponent } from './controls/dynamic-control/dynamic-control.component';
import {FormsModule} from '@angular/forms';
import { SettingsComponent } from './controls/settings/settings.component';
import {PreviewComponent} from './controls/preview/preview.component';
import { PdfPreviewComponent } from './controls/sp-control/pdf/pdf-preview/pdf-preview.component';
import { TextPreviewComponent } from './controls/sp-control/text/text-preview/text-preview.component';
import { LabeledGraphicPreviewComponent } from './controls/sp-control/labeled-graphic/labeled-graphic-preview/labeled-graphic-preview.component';
import { ImagePreviewComponent } from './controls/sp-control/image/image-preview/image-preview.component';
import { ImageSettingsComponent } from './controls/sp-control/image/image-settings/image-settings.component';
import { PdfSettingsComponent } from './controls/sp-control/pdf/pdf-settings/pdf-settings.component';
import {ImageComponent} from './controls/sp-control/image/image.component';
import {ControlComponent} from './controls/sp-control/control.component';
import { LabeledGraphicSettingsComponent } from './controls/sp-control/labeled-graphic/labeled-graphic-settings/labeled-graphic-settings.component';
import { DynamicSettingsControlComponent } from './controls/dynamic-settings-control/dynamic-settings-control.component';
import { DynamicPreviewControlComponent } from './controls/dynamic-preview-control/dynamic-preview-control.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import {HttpClientModule} from '@angular/common/http';
import {SafePipe} from './safe.pipe';
import { LabeledGraphicSettingsDialogComponent } from './controls/dialogs/labeled-graphic-settings-dialog/labeled-graphic-settings-dialog.component';
import {NgInputFileModule} from 'ng-input-file';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ColorSketchModule} from 'ngx-color/sketch';
import {TwoColumnTextSettingsComponent} from './controls/sp-control/two-column-text/two-column-text-settings/two-column-text-settings.component';
import {ImageTextSettingsComponent} from './controls/sp-control/image-text/image-text-settings/image-text-settings.component';
import {TextOverImageSettingsComponent} from './controls/sp-control/text-over-image/text-over-image-settings/text-over-image-settings.component';
import {TwoColumnTextPreviewComponent} from './controls/sp-control/two-column-text/two-column-text-preview/two-column-text-preview.component';
import {ImageTextPreviewComponent} from './controls/sp-control/image-text/image-text-preview/image-text-preview.component';
import {TextOverImagePreviewComponent} from './controls/sp-control/text-over-image/text-over-image-preview/text-over-image-preview.component';
import {TextSettingsComponent} from './controls/sp-control/text/text-settings/text-settings.component';
import {ImageTextComponent} from './controls/sp-control/image-text/image-text.component';
import {TextOverImageComponent} from './controls/sp-control/text-over-image/text-over-image.component';
import {TwoColumnTextComponent} from './controls/sp-control/two-column-text/two-column-text.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    EditorRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    FormsModule,
    CKEditorModule,
    NgxPageScrollCoreModule,
    HttpClientModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    NgInputFileModule,
    ScrollingModule,
    ColorSketchModule,
    MatSelectModule
  ],
  providers: [],
  exports: [
    SidenavComponent,
  ],
  entryComponents: [
    ControlComponent,
    ImageComponent,
    TextComponent,
    TextOverImageComponent,
    ImageTextComponent,
    PdfComponent,
    LabeledGraphicComponent,
    DynamicControlComponent,
    DynamicSettingsControlComponent,
    DynamicPreviewControlComponent,
    TwoColumnTextSettingsComponent,
    TwoColumnTextComponent,
    ImageSettingsComponent,
    ImageTextSettingsComponent,
    TextOverImagePreviewComponent,
    TwoColumnTextPreviewComponent,
    ImageTextPreviewComponent,
    TextOverImageSettingsComponent,
    PdfSettingsComponent,
    LabeledGraphicSettingsComponent,
    ImagePreviewComponent,
    TextPreviewComponent,
    PdfPreviewComponent,
    LabeledGraphicPreviewComponent,
    LabeledGraphicSettingsDialogComponent
  ],
  declarations: [
    CoreComponent,
    SidenavComponent,
    EditorComponent,
    ControlComponent,
    ImageComponent,
    LabeledGraphicComponent,
    PdfComponent,
    TextComponent,
    TextOverImageComponent,
    ImageTextComponent,
    DynamicControlDirective,
    DynamicControlComponent,
    SettingsComponent,
    ImageTextSettingsComponent,
    TextOverImageSettingsComponent,
    TwoColumnTextComponent,
    PreviewComponent,
    SettingsComponent,
    PdfPreviewComponent,
    TextPreviewComponent,
    TwoColumnTextPreviewComponent,
    LabeledGraphicPreviewComponent,
    ImageTextPreviewComponent,
    TextOverImagePreviewComponent,
    TextSettingsComponent,
    ImagePreviewComponent,
    TwoColumnTextSettingsComponent,
    ImageSettingsComponent,
    PdfSettingsComponent,
    LabeledGraphicSettingsComponent,
    DynamicSettingsControlComponent,
    DynamicPreviewControlComponent,
    SafePipe,
    LabeledGraphicSettingsDialogComponent
  ],
})
export class EditorModule { }
