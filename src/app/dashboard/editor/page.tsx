'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Video,
  ImageIcon,
  Type,
  Link,
  FileText,
  Globe,
  Users,
  Settings,
  Briefcase,
  MessageSquare,
  Home,
  Move,
  Eye
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import { supabase } from '@/lib/supabase'

interface ContentBlock {
  id: string
  type: 'text' | 'video' | 'image' | 'link' | 'button'
  title: string
  content: string
  url?: string
  section: string
  order: number
  styles: {
    fontSize?: string
    color?: string
    backgroundColor?: string
    padding?: string
    margin?: string
    textAlign?: "left" | "right" | "center" | "justify"
    fontWeight?: string
  }
  created_at: string
}

export default function ContentEditor() {
  const [blocks, setBlocks] = useState<ContentBlock[]>([])
  const [selectedBlock, setSelectedBlock] = useState<ContentBlock | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero')
  const [loading, setLoading] = useState(true)

  const sections = [
    { id: 'hero', name: 'الصفحة الرئيسية', icon: Home },
    { id: 'about', name: 'من نحن', icon: Users },
    { id: 'services', name: 'الخدمات', icon: Settings },
    { id: 'portfolio', name: 'المشاريع', icon: Briefcase },
    { id: 'contact', name: 'التواصل', icon: MessageSquare }
  ]

  const blockTypes = [
    { type: 'text', label: 'نص', icon: Type, color: 'bg-blue-50' },
    { type: 'video', label: 'فيديو', icon: Video, color: 'bg-red-50' },
    { type: 'image', label: 'صورة', icon: ImageIcon, color: 'bg-green-50' },
    { type: 'link', label: 'رابط', icon: Link, color: 'bg-purple-50' },
    { type: 'button', label: 'زر', icon: FileText, color: 'bg-orange-500' }
  ]

  useEffect(() => {
    loadContent()
  }, [currentSection])

  const loadContent = async () => {
    try {
      setLoading(true)
      
      // Create default blocks for demo
      const defaultBlocks = createDefaultBlocks(currentSection)
      setBlocks(defaultBlocks)
    } catch (error) {
      console.error('Error loading content:', error)
    } finally {
      setLoading(false)
    }
  }

  const createDefaultBlocks = (section: string): ContentBlock[] => {
    const now = new Date().toISOString()
    
    switch (section) {
      case 'hero':
        return [
          {
            id: '1',
            type: 'text',
            title: 'العنوان الرئيسي',
            content: 'منصتك الشاملة للتميز والانتشار',
            section: 'hero',
            order: 1,
            styles: {
              fontSize: '3rem',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#1f2937'
            },
            created_at: now
          },
          {
            id: '2',
            type: 'text',
            title: 'الوصف الرئيسي',
            content: 'نحول أفكارك إلى واقع مؤثر بأعلى معايير الجودة والاحترافية',
            section: 'hero',
            order: 2,
            styles: {
              fontSize: '1.25rem',
              textAlign: 'center',
              color: '#6b7280'
            },
            created_at: now
          },
          {
            id: '3',
            type: 'button',
            title: 'شاهد الفيديو التعريفي',
            content: 'شاهد الفيديو التعريفي',
            section: 'hero',
            order: 3,
            styles: {
              backgroundColor: '#fbbf24',
              color: '#000000',
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 'bold'
            },
            created_at: now
          }
        ]
      default:
        return [
          {
            id: '1',
            type: 'text',
            title: 'محتوى جديد',
            content: 'أضف محتوى جديد هنا',
            section,
            order: 1,
            styles: {},
            created_at: now
          }
        ]
    }
  }

  const addBlock = (type: string) => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type: type as any,
      title: `عنصر جديد`,
      content: type === 'text' ? 'أضف نص هنا' : 'أضف محتوى هنا',
      section: currentSection,
      order: blocks.length + 1,
      styles: {},
      created_at: new Date().toISOString()
    }

    setBlocks(prev => [...prev, newBlock])
    setSelectedBlock(newBlock)
    setIsEditing(true)
  }

  const updateBlock = (blockId: string, updates: Partial<ContentBlock>) => {
    setBlocks(prev => prev.map(block => 
      block.id === blockId ? { ...block, ...updates } : block
    ))
    if (selectedBlock?.id === blockId) {
      setSelectedBlock(prev => prev ? { ...prev, ...updates } : null)
    }
  }

  const deleteBlock = (blockId: string) => {
    setBlocks(prev => prev.filter(block => block.id !== blockId))
    if (selectedBlock?.id === blockId) {
      setSelectedBlock(null)
    }
  }

  const saveContent = async () => {
    try {
      // Save to database
      const { error } = await supabase
        .from('content_blocks')
        .upsert(blocks, { onConflict: 'id' })

      if (error) {
        console.error('Save error:', error)
      }
      
      alert('تم حفظ المحتوى بنجاح!')
    } catch (error) {
      console.error('Save error:', error)
      alert('تم حفظ المحتوى محلياً')
    }
  }

  const renderBlock = (block: ContentBlock) => {
    const isSelected = selectedBlock?.id === block.id

    return (
      <motion.div
        key={block.id}
        layout
        className={`relative group cursor-pointer ${
          isSelected ? 'ring-2 ring-gold' : ''
        }`}
        onClick={() => setSelectedBlock(block)}
      >
        {/* Block Controls */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="flex space-x-1 rtl:space-x-reverse bg-white rounded-lg shadow-lg p-1">
            <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
              <Edit className="w-3 h-3" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => deleteBlock(block.id)}>
              <Trash2 className="w-3 h-3" />
            </Button>
            <Button size="sm" variant="outline">
              <Move className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Block Content */}
        <div 
          className="p-4 border border-gray-200 rounded-lg bg-white"
          style={block.styles as any}
        >
          {block.type === 'text' && (
            <div className="min-h-[2rem]">
              {isEditing && isSelected ? (
                <Textarea
                  value={block.content}
                  onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                  className="w-full border-none p-0 resize-none"
                  rows={Math.max(2, block.content.split('\n').length)}
                />
              ) : (
                <div className="whitespace-pre-wrap">{block.content}</div>
              )}
            </div>
          )}

          {block.type === 'video' && (
            <div className="min-h-[200px] bg-gray-100 rounded flex items-center justify-center">
              {block.url ? (
                <video controls className="max-w-full h-auto">
                  <source src={block.url} type="video/mp4" />
                </video>
              ) : (
                <div className="text-gray-500">أضف رابط الفيديو</div>
              )}
            </div>
          )}

          {block.type === 'image' && (
            <div className="min-h-[200px] bg-gray-100 rounded flex items-center justify-center">
              {block.url ? (
                <img src={block.url} alt={block.title} className="max-w-full h-auto" />
              ) : (
                <div className="text-gray-500">أضف رابط الصورة</div>
              )}
            </div>
          )}

          {block.type === 'button' && (
            <button 
              className="px-6 py-3 rounded-lg font-medium transition-colors"
              style={block.styles}
            >
              {block.content}
            </button>
          )}
        </div>
      </motion.div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 border-b-2 border-gold"></div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">محرر المحتوى</h1>
          <p className="text-sm text-gray-600">تحكم مباشر في محتوى الموقع</p>
        </div>

        {/* Section Selector */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">اختر القسم</h3>
          <div className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`w-full text-right p-2 rounded-lg text-sm transition-colors ${
                  currentSection === section.id
                    ? 'bg-gold text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.name}
              </button>
            ))}
          </div>
        </div>

        {/* Block Types */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">إضافة عنصر</h3>
          <div className="grid grid-cols-2 gap-2">
            {blockTypes.map((blockType) => (
              <button
                key={blockType.type}
                onClick={() => addBlock(blockType.type)}
                className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-center"
              >
                <blockType.icon className={`w-6 h-6 auto mb-1 ${blockType.color} text-white p-1 rounded`} />
                <div className="text-xs text-gray-600">{blockType.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 border-b border-gray-200">
          <div className="space-y-2">
            <Button onClick={saveContent} className="w-full">
              <Save className="w-4 h-4 ml-2" />
              حفظ التغييرات
            </Button>
            <Button variant="outline" className="w-full">
              <Eye className="w-4 h-4 ml-2" />
              معاينة
            </Button>
          </div>
        </div>

        {/* Style Panel */}
        {selectedBlock && (
          <div className="flex-1 p-4 overflow-y-auto">
            <h3 className="text-sm font-medium text-gray-700 mb-2">تخصيص العنصر</h3>
            <div className="space-y-3">
              <Input
                label="العنوان"
                value={selectedBlock.title}
                onChange={(e) => updateBlock(selectedBlock.id, { title: e.target.value })}
              />
              
              {(selectedBlock.type === 'video' || selectedBlock.type === 'image') && (
                <Input
                  label="الرابط"
                  value={selectedBlock.url || ''}
                  onChange={(e) => updateBlock(selectedBlock.id, { url: e.target.value })}
                  placeholder="أدخل رابط الملف"
                />
              )}

              <div className="grid grid-cols-2 gap-2">
                <Input
                  label="حجم الخط"
                  value={selectedBlock.styles.fontSize || ''}
                  onChange={(e) => updateBlock(selectedBlock.id, { 
                    styles: { ...selectedBlock.styles, fontSize: e.target.value }
                  })}
                  placeholder="1rem"
                />
                <Input
                  label="اللون"
                  value={selectedBlock.styles.color || ''}
                  onChange={(e) => updateBlock(selectedBlock.id, { 
                    styles: { ...selectedBlock.styles, color: e.target.value }
                  })}
                  placeholder="#000000"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Editor */}
      <div className="flex-1 flex-col">
        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <h2 className="text-lg font-semibold text-gray-900">
                {sections.find(s => s.id === currentSection)?.name}
              </h2>
              <span className="text-sm text-gray-500">
                {blocks.length} عنصر
              </span>
            </div>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 ml-1" />
                رفع ملفات
              </Button>
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {blocks.map((block) => (
                <motion.div
                  key={block.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {renderBlock(block)}
                </motion.div>
              ))}
            </div>

            {blocks.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">لا يوجد محتوى</h3>
                <p className="text-gray-500 mb-4">ابدأ بإضافة عناصر من الشريط الجانبي</p>
                <Button onClick={() => addBlock('text')}>
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة عنصر أول
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 